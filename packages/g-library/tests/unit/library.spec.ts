import {cleanBooleanType, cleanIntegerType, isInteger} from "./../../src/scripts/_valueTypes"
import {formatCurrency} from "@/scripts/_number";
import {batchtest} from "../helpers";
import {getPaths} from '@/scripts/_paths'
const generic_test_values = [
    'gillian',
    {testobj: "testing!!!!"},
    [],
    ["true"],
    true,
    2,
    0
]
describe("Function libTest", () => {
    test("cleanBooleanType", () => {
        expect(cleanBooleanType("true")).toEqual(true);
        expect(cleanBooleanType("true")).not.toEqual("true");
        expect(cleanBooleanType(false)).toEqual(false);
        expect(cleanBooleanType("false")).toEqual(false);
        batchtest(cleanBooleanType, generic_test_values)
    });
    test("cleanNumberType", () => {
        expect(cleanIntegerType(' 2.00', true)).toEqual(2.0)
        expect(cleanIntegerType('2px')).toEqual('2px')
        expect(cleanIntegerType('2px', true)).toEqual(2)
        expect(cleanIntegerType(false)).toEqual(false)
        expect(cleanIntegerType("2")).not.toEqual("2")
        batchtest(cleanIntegerType, generic_test_values)
    });
    test("isInteger", () => {
        expect(isInteger(2.00)).toEqual(true)
        expect(isInteger('4px')).not.toEqual(true)
        expect(isInteger('3')).toEqual(true)
        expect(isInteger(true)).toEqual(false)
        expect(isInteger(["22", 4])).toEqual(false)
    });
    test("formatCurrency", () => {
      expect(formatCurrency("22", 0)).toEqual("$22");
      expect(formatCurrency("22")).toEqual("$22.00");
      expect(formatCurrency("22.2")).toEqual("$22.20");
      expect(formatCurrency(30)).toEqual("$30.00");
      expect(formatCurrency(30.5)).toEqual("$30.50");
    });

});

describe("Get Paths ", () => {
    test("getPaths", () => {
        const colors_obj = {"colors":
                {"corn": {
                "50"
            :
                "#fefcf3",
                    "100"
            :
                "#fdf9e8",
                    "200"
            :
                "#fbf1c5",
                    "300"
            :
                "#f9e8a3",
                    "400"
            :
                "#f4d75d",
                    "500"
            :
                "#efc618",
                    "600"
            :
                "#d7b216",
                    "700"
            :
                "#b39512",
                    "800"
            :
                "#8f770e",
                    "900"
            :
                "#75610c",
                    "DEFAULT"
            :
                "#efc618"
            }, "gumleaf": {
                "50"
            :
                "#fbfdfc",
                    "100"
            :
                "#f7fbf9",
                    "200"
            :
                "#ebf4f0",
                    "300"
            :
                "#dfede7",
                    "400"
            :
                "#c7e0d4",
                    "500"
            :
                "#afd3c2",
                    "600"
            :
                "#9ebeaf",
                    "700"
            :
                "#839e92",
                    "800"
            :
                "#697f74",
                    "900"
            :
                "#56675f",
                    "DEFAULT"
            :
                "#afd3c2"
            }}}
        const obj = {a: {x: 1, y: 3}, b: {c: 2, d: {x: 3}, e: {f: {x: 5, g: {x: 3}}}}}
        const result = [[], ["a"], ["a", "x"], ["a", "y"], ["b"], ["b", "c"], ["b", "d"],
   ["b", "d", "x"], ["b", "e"], ["b", "e", "f"], ["b", "e", "f", "x"], ["b", "e", "f", "g"], ["b", "e", "f", "g", "x"]]
      expect(getPaths(obj)).toEqual(result);
    });
});
