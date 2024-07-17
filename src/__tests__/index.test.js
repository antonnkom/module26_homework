import { stringReverse } from "../index.js";

describe('test reverse string', () => {
    const simpleString = 'string 678 .,!-';

    it('success reverse string', () => {
        const result = stringReverse(simpleString);
        expect(result).toBe('-!,. 876 gnirts');
    });
});