import { EXT } from './constants';

export function normalizeCurrentFile(relFilePath) {
    const filePathPlusExt = relFilePath.endsWith('.markdown') ? relFilePath : relFilePath + EXT;
    const absFilePath = filePathPlusExt;
    return absFilePath;
}

export function fileDir(relFilePath) {
    return normalizeCurrentFile(relFilePath).slice(0, -EXT.length);
}
