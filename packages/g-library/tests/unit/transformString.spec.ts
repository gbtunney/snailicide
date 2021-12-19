import {trimCharacters, replaceCharacters} from "@/scripts/transformString";
import {transformString, transformStringAll, validateString} from "@/scripts/transformString";
import * as RA from "ramda-adjunct";

/* * UNIT TESTS * */

describe("Transform String Function", () => {

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
            ["clean","stringToInt"]
        )).toEqual(2);

        expect(transformStringAll("    55) ", [" ",")"],
            ["clean","stringToInt"]
        )).toEqual(55);

        expect(transformStringAll("    55) ", [" "],
            ["clean","stringToInt"]
        )).toEqual("55)");
    });
});
