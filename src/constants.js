import os from 'os'
import path from 'path';

export const DEFAULT_PAGE = 'Home';
export const APP_NAME = 'awiki';
export const BASEPATH = path.join(os.homedir(), APP_NAME);
export const HOMEPATH = path.join(BASEPATH, DEFAULT_PAGE);
export const TRASHPATH = path.join(BASEPATH, 'Trash');
export const EXT = '.markdown';
