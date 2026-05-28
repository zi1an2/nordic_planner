# ▰ Nord Planner

Hey there! Welcome to **Nord Planner** — a clean, calm, and lightning-fast desktop planner built to help you map out your day without the noise. It brings together the clean, minimal aesthetic of Notion with the distraction-free workflow of Sunsama.

Because it is built strictly with Electron and vanilla web technologies, it is 100% offline-first. Your data is stored safely on your own machine with absolutely zero cloud syncing, data tracking, or telemetry. Just a peaceful space to focus on your day.

![Nord Theme](https://raw.githubusercontent.com/arcticicestudio/nord/main/assets/nord-banner.png)

## ✨ What it does

* **Fluid Time-Blocking:** Schedule your day by dragging, dropping, and resizing tasks directly on your grid, snapped to 15-minute intervals.
* **Custom Activity Types:** Personalize your workspace! Add, rename, and delete your own custom categories (like 'Learning', 'Work', 'Personal') using beautiful presets from the official Nord palette.
* **Split-Pane Notes:** Click any task block to open a sidebar canvas for detailed markdown-style notes, ideas, and checkbox sub-items.
* **Views for Every Scope:** Seamlessly switch between a detailed Daily view, a structured Weekly view, and a Monthly overview calendar.
* **Easy on the Eyes:** Styled entirely around the beautiful, muted Arctic Ice Studio Nord spectrum, making it comfortable to use day or night.
* **100% Private & Serverless:** No web logins, no database servers, and no trackers. Everything is auto-saved locally in browser storage.

---

## ⚙️ Under the Hood

To keep things bloat-free and running at absolute peak performance, this app avoids large frontend frameworks like React, Vue, Vite, or Tailwind. It's just raw HTML, Native CSS variables/grids, and lightweight asynchronous JavaScript.

### What you need:
* **Node.js:** v18.0.0 or higher (Fully tested on v26+)
* **npm:** v9.0.0 or higher

### Key dependencies:
* **Electron (`^30.0.0`):** Handles native window rendering, global keyboard shortcuts, and desktop integration.
* **Vanilla Web Stack:** Pure HTML5/CSS/JS for near-zero RAM usage and instant loading speeds.

---

## 🚀 Let's get started

Because different Linux distributions handle Node.js and binary sandboxing differently, standard `npm install` routines can occasionally fail to pull the underlying native Electron binaries. 

This installation flow is verified to work cleanly and stably across Arch, CachyOS, Ubuntu, Debian, Fedora, and openSUSE:

```bash
# 1. Clone the repository and enter the directory
git clone https://github.com/zi1an2/nordic_planner.git
cd nordic_planner

# 2. Clear out any local cache and install fresh packages
rm -rf node_modules package-lock.json
npm install

# 3. Linux compatibility helper
# If npm skips downloading the native Electron binary, force it:
npm run force-bindownload || true

# 4. Launch the application!
npm start
```
