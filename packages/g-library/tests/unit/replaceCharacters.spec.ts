import {replaceCharacters} from "../../src/scripts/transformString/_replaceCharacters";

describe('replace characters', function () {
    test("replaceCharacters", () => {
        expect(replaceCharacters("._.str!n_g_", ["!"])).toEqual("._.strn_g_");
        expect(replaceCharacters("._.str!n_g_", "!")).toEqual("._.strn_g_");
        expect(replaceCharacters("._.str!n_g_", "!", "^")).toEqual("._.str^n_g_");
        expect(replaceCharacters("gillian_bray_tunney", ["bray", "e"], "^")).toEqual("gillian_^_tunn^y");
        expect(replaceCharacters("gillian_bray_tunney", "bray", false)).toEqual("gillian_bray_tunney");
        expect(replaceCharacters("22 px ", [" ", "px", false], true)).toEqual("22");
    });
});
