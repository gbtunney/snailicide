import {cleanBooleanType, cleanIntegerType, isInteger} from "@/scripts/_type"
import {batchtest} from "../helpers";

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
});
