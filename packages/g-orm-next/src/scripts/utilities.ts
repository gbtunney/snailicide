
//https://levelup.gitconnected.com/typescript-keeping-type-guards-safe-and-up-to-date-2457d52bd722
//https://github.com/MichalSzorad/create-typeguard#readme
//https://www.npmjs.com/package/create-typeguard
//example:
// -const isPerson = createTypeGuard(parsePerson);
// Parser is a function which takes unknown and returns T or null
/* const data: unknown = response.body;

if (isPerson(data)) {
	// data is Person
	console.log('Welcome ' + data.name);
} else {
	consxole.log('You are not a person!');
}*/

type Parser<T> = (value: unknown) => T | null;

function hasProperties<T extends object, K extends string>(obj: T, ...keys: K[]): obj is T & { [J in K]: unknown } {
    return !!obj && keys.every(key => obj.hasOwnProperty(key));
}


const createTypeGuard = <T>(parse: Parser<T>) => (value: unknown): value is T => {
    return parse(value) !== null;
};

export { hasProperties, createTypeGuard };
export default createTypeGuard;

/*import { hasProperties } from '../index';

describe('create-typeguard', () => {

    describe('hasProperties', () => {
        it('should return false when the object has not any of the given property', () => {
            expect(hasProperties({ foo: 'bar' }, 'foo', 'test')).toBe(false);
        });

        it('should return true when the object has all of the properties', () => {
            expect(hasProperties({ foo: 'bar', bar: 'foo' }, 'foo', 'bar')).toBe(true);
        });
    });
});*/
