import { Board, Shape } from "@penpot/plugin-types";
import { PluginMessageEvent } from "./model";

type PenpotDataRaw = {
  start: number;
  project: string;
  page: string;
  change: string;
  collaborators: string[];
};
function hasDaProperty(
  event: Shape | Board,
): event is
  | (Shape & { Da: { Lf: string } })
  | (Board & { Da: { Lf: string } }) {
  return event && typeof event === "object" && "Da" in event;
}
penpot.ui.open("Activity Tracker", `?theme=${penpot.theme},`, {
  width: 320,
  height: 630,
});

penpot.on("themechange", (theme) => {
  sendMessage({ type: "theme", content: theme });
});

console.log(`Above: penpot.ui.sendMessage({`);

penpot.ui.onMessage<{ message: string }>(async (message) => {
  if (message.message == "id_request") {
    penpot.ui.sendMessage({
      type: "user_id_response",
      userId: penpot.currentUser.id,
    });
  }
});
console.log(`Below: penpot.ui.sendMessage({`);
let listenerIds: symbol[] = [];

let previousStates: Shape[] = [];
penpot.on("selectionchange", (event) => {
  clearListenerIdsEventListeners();

  for (let i = 0; i < event.length; i++) {
    const selectionId = event[i];
    reInitializeChangeList(selectionId);
    addOnShapeChangeListener(selectionId);
    reInitializeChangeList(selectionId);
  }
});

function reInitializeChangeList(selectionId: string) {
  previousStates = [];
  const initialShapeState = penpot.currentPage?.getShapeById(selectionId);
  previousStates.push(JSON.parse(JSON.stringify(initialShapeState)));
}

function addOnShapeChangeListener(selectionId: string) {
  const listenerId = penpot.on(
    "shapechange",
    (event) => {
      if (hasDaProperty(event)) {
        const changedShapeId = event.Da.Lf;
        const oldShapeState = previousStates.find(
          (value) => value.id == changedShapeId,
        );
        const newShapeState = penpot.currentPage?.getShapeById(selectionId);
        if (!oldShapeState || !newShapeState) return;
        const changes = compareValuesAndReturnChange(
          oldShapeState,
          newShapeState,
        );
        const timestamp = Date.now();
        const fileData = penpot.currentFile;
        const pageData = penpot.currentPage;
        const userId = penpot.currentUser.id;
        const collaborators = penpot.activeUsers.map((value) => value.id);
        if (!fileData || !pageData) return;
        changes.forEach((change) => {
          log_action({
            type: "append_to_db",
            payload: {
              change: change.type,
              page: pageData.name,
              collaborators: collaborators,
              project: fileData.name,
              start: timestamp,
            },
            userId: userId,
          });
        });
      }
      reInitializeChangeList(selectionId);
    },
    { shapeId: selectionId },
  );
  listenerIds.push(listenerId);
}

function clearListenerIdsEventListeners() {
  for (let i = 0; i < listenerIds.length; i++) {
    const listenerId_ = listenerIds[i];
    penpot.off(listenerId_);
  }

  listenerIds = [];
}

function log_action(message: {
  type: "append_to_db";
  payload: PenpotDataRaw;
  userId: string;
}) {
  penpot.ui.sendMessage(message);
}
function sendMessage(message: PluginMessageEvent) {
  penpot.ui.sendMessage(message);
}
// penpot.ui.onMessage<string>(async (message) => {});

function compareValuesAndReturnChange(
  oldShapeState: Shape,
  newShapeState: Shape,
): { type: string; oldValue: string; newValue: string }[] {
  const changes: { type: string; oldValue: string; newValue: string }[] = [];

  for (const key in oldShapeState) {
    if (Object.prototype.hasOwnProperty.call(oldShapeState, key)) {
      const propertyKey = key as keyof Shape;
      const oldValue = oldShapeState[propertyKey];
      const newValue = newShapeState[propertyKey];

      if (typeof oldValue === "function" || typeof newValue === "function") {
        continue;
      }
      if (propertyKey === "parent") {
        const oldParentId = oldValue ? (oldValue as Shape).id : null;
        const newParentId = newValue ? (newValue as Shape).id : null;
        if (oldParentId !== newParentId) {
          changes.push({
            type: key,
            oldValue: oldParentId || "null",
            newValue: newParentId || "null",
          });
        }
      } else if (typeof oldValue === "object" && typeof newValue === "object") {
        if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
          changes.push({
            type: key,
            oldValue: JSON.stringify(oldValue),
            newValue: JSON.stringify(newValue),
          });
        }
      } else if (oldValue !== newValue) {
        changes.push({
          type: key,
          oldValue: String(oldValue),
          newValue: String(newValue),
        });
      }
    }
  }

  return changes;
}
// function DEBUG_LOG(key: string, DEBUG_TARGET_KEY: string, string: string) {
//   if (key == DEBUG_TARGET_KEY) console.log(string);
// }
// const DEBUG_TARGET_KEY = "width";
