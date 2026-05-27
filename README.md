# ▰ Nord Planner

A lightweight, minimal, and lightning-fast desktop productivity and time-blocking planner inspired by the aesthetics of Notion and the workflow of Sunsama. 

Built entirely with Electron and vanilla web technologies, Nord Planner runs locally, offline-first, and saves data straight to your local environment with zero third-party cloud tracking.

![Nord Theme](https://raw.githubusercontent.com/arcticicestudio/nord/main/assets/nord-banner.png)

## Features

* **Time-Blocking Grid:** Drag, drop, and fluidly resize your daily schedule into 15-minute intervals.
* **Split-Pane Workspace:** Click any time block to pull open a canvas panel for deep markdown-style notes and task sub-items.
* **Multi-View Navigation:** Switch smoothly between Daily tracking, Weekly overviews, and Monthly planning calendars.
* **Nord Palette Interface:** Easy on the eyes. Fully themed using the authentic Arctic Ice Studio Nord spectrum.
* **Privacy-First:** Completely serverless. No databases, no telemetry, and auto-saves instantly via local browser persistence layers.

---

## Dependencies & Requirements

To maintain a zero-bloat architecture, this application avoids large framework ecosystems (no React, Tailwind, Vite, or TypeScript). It relies strictly on the minimum required runtimes for desktop isolation:

### System Requirements
* **Node.js:** v18.0.0 or higher (Fully tested on v26+)
* **npm:** v9.0.0 or higher

### Core Dependencies
* **Electron (`^30.0.0`):** Handles native OS window rendering, Linux desktop integration, system-level sandboxing, and global keyboard shortcuts.
* **Vanilla Web Stack:** Standard HTML5, Native CSS Grid/Variables, and pure asynchronous JavaScript for performance and ultra-low RAM usage.

---

## Installation & Setup

Because Linux distributions handle Node.js and binary sandboxing differently, standard `npm install` routines can sometimes fail to pull the underlying native Electron binaries. 

The installation workflow below is designed to be **completely stable across all Linux distributions** (Arch, CachyOS, Ubuntu, Debian, Fedora, and openSUSE) by utilizing an explicit binary extraction fallback or bridging directly to system runtimes.

```bash
# 1. Clone the repository and jump into the directory
git clone [https://github.com/zi_1an/nord-planner.git](https://github.com/zi_1an/nord-planner.git)
cd nord-planner

# 2. Wipe clean any partial lockfiles and install dependencies
rm -rf node_modules package-lock.json
npm install

# 3. STABLE RUNTIME BINDING (Universal Linux Fallback)
# If npm skips downloading the native binary, force-extract it manually:
npm run force-bindownload || true

# 4. Launch the application
npm start
