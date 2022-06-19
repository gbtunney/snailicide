import path from "path";
import fs from "fs";
const glob = require("glob");

const getFileKeyPairs = function (_globpath: string) {
    const pairArray = glob.sync(_globpath).map(function (_path: string) {
        const regex: RegExp = /[A-Za-z0-9_\-\.]+\.[A-Za-z0-9]+$/;
        const matchArr: RegExpMatchArray | null = _path.toString().match(regex);
        if (matchArr === null) return undefined
        if ((matchArr !== null || matchArr !== undefined)
            && matchArr.length > 0) {
            const [, filekey] = (path.resolve(__dirname, _path)).match(/([^:\\/]*?)(?:\.([^ :\\/.]*))?$/) /// split file extenstion
            const fileentry = fs.readFileSync(path.resolve(__dirname, _path), 'utf8');
            try {
                return [filekey, JSON.parse(fileentry)];
            } catch (e) {
                console.error('invalid json', filekey);
                return [filekey, fileentry];
            }
        }
    });
    return pairArray.reduce((accumulator, [key, value]) => {
        return {...accumulator, [key]: value}
    }, {});
};
const getFileArr = function (_globpath: string) {
    return glob.sync(_globpath).map(function (_path: string) {
        const regex: RegExp = /[A-Za-z0-9_\-\.]+\.[A-Za-z0-9]+$/;
        const matchArr: RegExpMatchArray | null = _path.toString().match(regex);
        if (matchArr === null) return undefined
        if ((matchArr !== null || matchArr !== undefined)
            && matchArr.length > 0) {
            const [filename] = matchArr
            return filename;
        }
    });
};

module.exports={
    getFileKeyPairs,
    getFileArr
}
