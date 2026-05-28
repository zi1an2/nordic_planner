const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  onGlobalQuickAdd: (callback) => ipcRenderer.on("global-quick-add", (_event) => callback()),
});
