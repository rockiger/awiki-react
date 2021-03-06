import fs from 'fs';
import path from 'path';
import { app, BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { enableLiveReload, addBypassChecker } from 'electron-compile';
import windowStateKeeper from 'electron-window-state';

import { EXT, HOMEPATH, BASEPATH, TRASHPATH} from './constants'

// That files from file system are shown
addBypassChecker(filePath => filePath.indexOf(app.getAppPath()) === -1 && (/.jpg/.test(filePath) || /.ms/.test(filePath) || /.png/.test(filePath)));

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

// check if wikidirectory is present, if not create it
if (!fs.existsSync(HOMEPATH)) createDefaultDirectory();


const createWindow = async () => {

    // Load the previous state with fallback to defaults
    let mainWindowState = windowStateKeeper({
        defaultWidth: 1050,
        defaultHeight: 950,
    });

    // Create the browser window.
    mainWindow = new BrowserWindow({
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        backgroundColor: '#fff',
    });
    mainWindowState.manage(mainWindow);

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Open the DevTools.
    if (isDevMode) {
        await installExtension(REACT_DEVELOPER_TOOLS);
        mainWindow.webContents.openDevTools();
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
        mainWindow = null;
    });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

function createDefaultDirectory() {
    fs.mkdirSync(BASEPATH, { recursive: true });
    fs.mkdirSync(HOMEPATH, { recursive: true });
    fs.writeFileSync(HOMEPATH + EXT, '# Home\n\n');
    fs.mkdirSync(TRASHPATH, { recursive: true });
    fs.writeFileSync(TRASHPATH + EXT, '# Trash\n\n');
}
