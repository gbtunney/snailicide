import {trimCharacters, batchTrimCharacters} from './_trimCharacters';

describe('trimCharacters', () => {
    it('returns `true` trimCharacters', () => {
        expect(trimCharacters({value: '     -7.5', pattern: ' '})).toBe('-7.5');
    });
    it('returns `true` trimCharacters', () => {
        expect(trimCharacters({value: '..-7.5', pattern: '..', trimEnd: true})).toBe('-7.5');
    });
    it('returns `true` trimCharacters', () => {
        expect(trimCharacters({value: '..-7.5...', pattern: '..', trimEnd: true})).toBe('-7.5.');
    });

});
