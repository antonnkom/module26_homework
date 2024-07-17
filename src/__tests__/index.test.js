import { stringReverse } from "../index.js";

describe('test reverse string', () => {
    const simpleString = 'string 678 .,!-';
    const emptyString = '';
    const differentCaseString = 'String in difFerent Case';

    it('reverse simple string', () => {
        const result = stringReverse(simpleString);
        expect(result).toBe('-!,. 876 gnirts');
    });

    it('reverse empty string', () => {
        const result = stringReverse(emptyString);
        expect(result).toBe('');
    });

    it('reverse string in different case', () => {
        const result = stringReverse(differentCaseString);
        expect(result).toBe('esaC tnereFfid ni gnirtS');
    });
});