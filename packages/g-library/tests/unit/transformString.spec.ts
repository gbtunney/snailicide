import {trimCharacters, replaceCharacters} from "@/scripts/transformString";
import {transformString, transformStringAll, validateString} from "@/scripts/transformString";
import * as RA from "ramda-adjunct";

/* * UNIT TESTS * */
const bl = ["_", "!", "."]

describe("Transform String Function", () => {
    test("trimCharacters", () => {
        expect(trimCharacters("._.str!n_g_", bl)).toEqual("str!n_g");
        expect(trimCharacters("._.str!n_g_", bl, true, false, true)).toEqual("._.str!n_g");
        expect(trimCharacters("._.str!n_g_", bl, true, true, false)).toEqual("str!n_g_");
        expect(trimCharacters("._.str!n_g_", bl, true, false, false)).toEqual("._.str!n_g_");
        expect(trimCharacters("12", bl)).toEqual(12);
        expect(trimCharacters("!12__", bl)).toEqual(12);
        expect(trimCharacters("12", bl, false, true, true)).toEqual("12");
        expect(trimCharacters('12.025', bl)).toEqual('12.025');
        expect(trimCharacters(12.02, bl)).toEqual(12.02);
        expect(trimCharacters((.8).toString(), [...bl, "0"], false, true, true)).toEqual("8");
        expect(trimCharacters((1.8).toString(), [...bl, "0"])).toEqual("1.8");
        expect(trimCharacters("  var (--color-var)", [" ", "var(", "px", ")"], true, true, true, true)).toEqual('ar (--color-var')
    });
    test("replaceCharacters", () => {
        expect(replaceCharacters("._.str!n_g_", ["!"])).toEqual("._.strn_g_");
        expect(replaceCharacters("._.str!n_g_", "!")).toEqual("._.strn_g_");
        expect(replaceCharacters("._.str!n_g_", "!", true, "^")).toEqual("._.str^n_g_");
        expect(replaceCharacters("gillian_bray_tunney", ["bray", "e"], true, "^")).toEqual("gillian_^_tunn^y");
        expect(replaceCharacters("gillian_bray_tunney", "bray", false, false)).toEqual("gillian_bray_tunney");
        expect(replaceCharacters(22, "bray", true, "^")).toEqual(22);
        expect(replaceCharacters("22 px ", [" ", "px"], true, true)).toEqual(22);
        expect(replaceCharacters("22 px ", [" ", "px", false], false, true)).toEqual("22");
    });
    test("transformString", () => {
        expect(transformString(",,.  var (--col...or-v)ar)", [" "], {
            "trim": {blacklist: [")", "-", "."],}, "clean": [[",", " ", "var("], true],
        })).toEqual(".--col...or-v)ar");
        expect(transformString(",,.  var (--col...or-v)ar)", [" "],
            {
                "clean": [[",", " ", "var("], true],
                "trim": {
                    blacklist: [")", "-", "."]
                },
            }
        )).toEqual("col...or-v)ar");
        expect(transformString("spynx sucks", [" "],
            ["sentenceCase", "clean"]
        )).toEqual("Spynxsucks");
    });
    test("transformStringAll", () => {
        expect(transformStringAll(["abcdefg", ",,.  var (--col...or-v)ar)"], [" "], {
            "trim": {blacklist: [")", "-", "."],}, "clean": [[",", " ", "e", "var("], true],
        })).toEqual(['abcdfg', '.--col...or-v)ar']);

        expect(transformStringAll({simi: "abcdefg", spynx: ",,.  var (--col...or-v)ar)"}, [" "], {
            "trim": {blacklist: [")", "-", "."],}, "clean": [[",", " ", "e", "var("], true],
        })).toEqual({"simi": "abcdfg", "spynx": ".--col...or-v)ar"});

        expect(transformStringAll(["im a dumbass", "spynx sucks"], [" "],
            ["sentenceCase", "clean"]
        )).toEqual(["Imadumbass", "Spynxsucks"]);

        expect(transformStringAll("im a dumbass2", [" ", "2"],
            ["sentenceCase", "clean"]
        )).toEqual("Imadumbass");

        expect(transformStringAll("    2 ", [" "],
            ["clean"]
        )).toEqual(2);
    });
    test("validateString", () => {
        expect(validateString("kitten", ["kit", "hi"], "startsWith")).toEqual(true)
        expect(validateString("kitten", ["kitten", "test"], "eq")).toEqual(true)
        expect(validateString("Hi", "hi", "eq", false)).toEqual(true)
        expect(validateString("ggg", "gGg", "includes")).toEqual(false)
        expect(validateString("ggg", "gGg", "includes", false)).toEqual(true)
    });
});
