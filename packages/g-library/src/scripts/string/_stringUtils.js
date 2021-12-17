/**
 * GENERAL STRING UTILS
 * @author  https://github.com/mout/mout/tree/master/src/string
 */
export function lowerCase(str) {
    return (str).toString().toLowerCase()
    // return str.toLowerCase();
}

/**
 * "Safer" String.toUpperCase()
 */
export function upperCase(str) {
    return (str).toString().toUpperCase()
    //return str.toUpperCase();
}

/**
 * Convert string to camelCase text.
 */
export function camelCase(str) {
    str = replaceAccents(str);
    str = removeNonWord(str)
        .replace(/\-/g, " ") //convert all hyphens to spaces
        .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
        .replace(/\s+/g, "") //remove spaces
        .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
    return str;
}

/**
 * Add space between camelCase text.
 */
export function unCamelCase(str) {
    str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
    str = str.toLowerCase(); //add space between camelCase text
    return str;
}

/**
 * UPPERCASE first char of each word.
 */
export function properCase(str) {
    return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
}

/**
 * camelCase + UPPERCASE first char
 */
export function pascalCase(str) {
    return camelCase(str).replace(/^[a-z]/, upperCase);
}

/**
 * UPPERCASE first char of each sentence and lowercase other chars.
 */
export function sentenceCase(str) {
    // Replace first char of each sentence (new line or after '.\s+') to
    // UPPERCASE
    return lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, upperCase);
}

/**
 * Convert to lower case, remove accents, remove non-word chars and
 * replace spaces with the specified delimeter.
 * Does not split camelCase text.
 */
export function slugify(str, delimeter) {
    if (delimeter == null) {
        delimeter = "-";
    }

    str = replaceAccents(str);
    str = removeNonWord(str);
    str = trim(str) //should come after removeNonWord
        .replace(/ +/g, delimeter) //replace spaces with delimeter
        .toLowerCase();

    return str;
}

/**
 * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
 */
export function hyphenate(str) {
    str = unCamelCase(str);
    return slugify(str, "-");
}

/**
 * Replaces hyphens with spaces. (only hyphens between word chars)
 */
export function unhyphenate(str) {
    return str.replace(/(\w)(-)(\w)/g, "$1 $3");
}

/**
 * Replaces spaces with underscores, split camelCase text, remove
 * non-word chars, remove accents and convert to lower case.
 */
export function underscore(str) {
    str = unCamelCase(str);
    return slugify(str, "_");
}

/**
 * Remove non-word chars.
 */
export function removeNonWord(str) {
    return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "");
}

/**
 * Convert line-breaks from DOS/MAC to a single standard (UNIX by default)
 */
export function normalizeLineBreaks(str, lineEnd) {
    lineEnd = lineEnd || "\n";

    return str
        .replace(/\r\n/g, lineEnd) // DOS
        .replace(/\r/g, lineEnd) // Mac
        .replace(/\n/g, lineEnd); // Unix
}

/**
 * Replaces all accented chars with regular ones
 */
export function replaceAccents(str) {
    // verifies if the String has accents and replace them
    if (str.search(/[\xC0-\xFF]/g) > -1) {
        str = str
            .replace(/[\xC0-\xC5]/g, "A")
            .replace(/[\xC6]/g, "AE")
            .replace(/[\xC7]/g, "C")
            .replace(/[\xC8-\xCB]/g, "E")
            .replace(/[\xCC-\xCF]/g, "I")
            .replace(/[\xD0]/g, "D")
            .replace(/[\xD1]/g, "N")
            .replace(/[\xD2-\xD6\xD8]/g, "O")
            .replace(/[\xD9-\xDC]/g, "U")
            .replace(/[\xDD]/g, "Y")
            .replace(/[\xDE]/g, "P")
            .replace(/[\xE0-\xE5]/g, "a")
            .replace(/[\xE6]/g, "ae")
            .replace(/[\xE7]/g, "c")
            .replace(/[\xE8-\xEB]/g, "e")
            .replace(/[\xEC-\xEF]/g, "i")
            .replace(/[\xF1]/g, "n")
            .replace(/[\xF2-\xF6\xF8]/g, "o")
            .replace(/[\xF9-\xFC]/g, "u")
            .replace(/[\xFE]/g, "p")
            .replace(/[\xFD\xFF]/g, "y");
    }

    return str;
}

/**
 * Truncate string at full words.
 */
export function crop(str, maxChars, append) {
    return truncate(str, maxChars, append, true);
}

/**
 * Escape RegExp string chars.
 */
export function escapeRegExp(str) {
    var ESCAPE_CHARS = /[\\.+*?\^$\[\](){}\/'#]/g;
    return str.replace(ESCAPE_CHARS, "\\$&");
}

/**
 * Escapes a string for insertion into HTML.
 */
export function escapeHtml(str) {
    str = str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&#39;")
        .replace(/"/g, "&quot;");

    return str;
}

/**
 * Unescapes HTML special chars
 */
export function unescapeHtml(str) {
    str = str
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"');
    return str;
}

/**
 * Escape string into unicode sequences
 */
export function escapeUnicode(str, shouldEscapePrintable) {
    return str.replace(/[\s\S]/g, function (ch) {
        // skip printable ASCII chars if we should not escape them
        if (!shouldEscapePrintable && /[\x20-\x7E]/.test(ch)) {
            return ch;
        }
        // we use "000" and slice(-4) for brevity, need to pad zeros,
        // unicode escape always have 4 chars after "\u"
        return "\\u" + ("000" + ch.charCodeAt(0).toString(16)).slice(-4);
    });
}

/**
 * Remove HTML tags from string.
 */
export function stripHtmlTags(str) {
    return str.replace(/<[^>]*>/g, "");
}

/**
 * Remove non-printable ASCII chars
 */
export function removeNonASCII(str) {
    // Matches non-printable ASCII chars -
    // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
    return str.replace(/[^\x20-\x7E]/g, "");
}

/**
 * Pad string with `char` if its' length is smaller than `minLen`
 */
export function rpad(str, minLen, ch) {
    ch = ch || " ";
    return str.length < minLen ? str + repeat(ch, minLen - str.length) : str;
}

/**
 * Pad string with `char` if its' length is smaller than `minLen`
 */
export function lpad(str, minLen, ch) {
    ch = ch || " ";

    return str.length < minLen ? repeat(ch, minLen - str.length) + str : str;
}

export const WHITE_SPACES = [
    " ",
    "\n",
    "\r",
    "\t",
    "\f",
    "\v",
    "\u00A0",
    "\u1680",
    "\u180E",
    "\u2000",
    "\u2001",
    "\u2002",
    "\u2003",
    "\u2004",
    "\u2005",
    "\u2006",
    "\u2007",
    "\u2008",
    "\u2009",
    "\u200A",
    "\u2028",
    "\u2029",
    "\u202F",
    "\u205F",
    "\u3000"
];

/**
 * Capture all capital letters following a word boundary (in case the
 * input is in all caps)
 */
export function abbreviate(str) {
    return str.match(/\b([A-Z])/g).join("");
}
