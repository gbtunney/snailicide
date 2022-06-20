export const stringContainsNumber = (value: string): boolean =>
    /\d/.test(value)

export const stringContainsLetter = (value: string): boolean =>
    (value).length === 1 && (value.match(/[a-z]/i) === null)

export const getHTMLElementFromString = (value: string): HTMLElement => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(value, 'text/html');
    return doc.body;
};
