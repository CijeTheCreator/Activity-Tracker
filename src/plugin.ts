/* eslint-disable @typescript-eslint/no-unused-vars */
import type { PluginMessageEvent } from "./model";

penpot.ui.open("Activity Tracker", `?theme=${penpot.theme},`, {
  width: 320,
  height: 630,
});

penpot.on("themechange", (theme) => {
  sendMessage({ type: "theme", content: theme });
});

let listenerIds: symbol[] = [];
const root = penpot.root;
console.log("root id: ", root.id);
penpot.on(
  "shapechange",
  (event) => {
    console.log(event);
  },
  root.id,
);
penpot.on("selectionchange", (event) => {
  for (let i = 0; i < listenerIds.length; i++) {
    const listenerId_ = listenerIds[i];
    penpot.off(listenerId_);
  }
  listenerIds = [];
  for (let i = 0; i < event.length; i++) {
    const selectionId = event[i];
    console.log("SelectionId: ", selectionId);
    const listenerId = penpot.on(
      "shapechange",
      (event) => {
        console.log(event.Da);
      },
      { shapeId: selectionId },
    );
    listenerIds.push(listenerId);
  }
});

function sendMessage(message: PluginMessageEvent) {
  penpot.ui.sendMessage(message);
}
penpot.ui.onMessage<string>(async (message) => {});
