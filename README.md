# 💼 CodeWallet

**CodeWallet** is a free, cross-platform desktop app that helps developers save and organize reusable code snippets.

Built with **React + Electron**, the app features fast performance, a clean UI, local JSON persistence, and a smooth developer experience.

---

## 🚀 Features

- 💾 Save, edit, and delete code snippets
- 🏷️ Tag snippets for filtering and categorization
- 👁️ View code in a modal with copy-to-clipboard
- 🌓 Toggle between dark and light mode
- 🧭 Sidebar navigation
- 🔍 Real-time search
- 💾 Persistent local storage using `electron-store`

---

## 🛠️ Tech Stack

| Layer        | Tech Used               |
|--------------|-------------------------|
| Frontend     | React, JSX, Custom CSS  |
| Desktop Shell| Electron + Electron Vite|
| State Mgmt   | Zustand                 |
| Storage      | Electron Store (JSON)   |
| Styling      | Montserrat font + Custom colors ([Palette](https://coolors.co/ffffff-333333-b288c0-9a48d0-7bc950))

---

## ⚙️ Setup & Development

```bash
# 1. Clone the repo
git clone https://github.com/yassir-chouika/CodeWallet

# 2. Install dependencies
npm install

# 3. Start in development
npm run dev

---

## �️ Build for Production

```bash
# For Windows
npm run build:win

# For macOS
npm run build:mac

# For Linux
npm run build:linux
