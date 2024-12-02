/* eslint-disable @typescript-eslint/no-unused-vars */
import type { PluginMessageEvent } from "./model";

penpot.ui.open("Paste to Replace", `?theme=${penpot.theme},`, {
  width: 320,
  height: 630,
});

penpot.on("themechange", (theme) => {
  sendMessage({ type: "theme", content: theme });
});

function sendMessage(message: PluginMessageEvent) {
  penpot.ui.sendMessage(message);
}
penpot.ui.onMessage<>(async (message) => {});
