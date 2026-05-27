const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: "Nord Planner",
    backgroundColor: "#2E3440",
    icon: path.join(__dirname, "/home/zidane/Downloads/15533(1).jpg"), // Optional native icon
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });

  mainWindow.loadFile("index.html");

  // Remove default menu bar for a cleaner, modern Notion-like look
  mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();

  // Global Quick-Add Shortcut (Ctrl+Shift+N)
  globalShortcut.register("CommandOrControl+Shift+N", () => {
    if (mainWindow) {
      mainWindow.webContents.send("global-quick-add");
      mainWindow.show();
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});
