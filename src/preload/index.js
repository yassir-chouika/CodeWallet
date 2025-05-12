import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

contextBridge.exposeInMainWorld('electron', electronAPI)

contextBridge.exposeInMainWorld('api', {
  loadSnippets: () => ipcRenderer.invoke('load-snippets'),
  saveSnippets: (snippets) => ipcRenderer.invoke('save-snippets', snippets)
})
