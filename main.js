const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("path");
const fs = require("fs");

let mainWindow;

function createWindow() {
  const iconPath = "/home/zidane/Downloads/15533(1).jpg";
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: "Nord Planner",
    backgroundColor: "#2E3440",
    icon: fs.existsSync(iconPath) ? iconPath : undefined,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
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
