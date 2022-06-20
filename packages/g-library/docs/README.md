g-library

# g-library

## Table of contents

### Type Aliases

- [DeepPartial](undefined)
- [EmptyObject](undefined)
- [EmptyString](undefined)
- [Falsy](undefined)
- [NilLike](undefined)
- [NilOrEmpty](undefined)
- [Nullish](undefined)
- [NumberParseable](undefined)
- [PlainObject](undefined)
- [Primitive](undefined)

### Functions

- [batchReplaceAll](undefined)
- [batchTrimCharacters](undefined)
- [camelCase](undefined)
- [cleanBooleanType](undefined)
- [cleanIntegerType](undefined)
- [contains](undefined)
- [endsWith](undefined)
- [eq](undefined)
- [escapeHtml](undefined)
- [escapeUnicode](undefined)
- [formatCurrency](undefined)
- [get](undefined)
- [getDigitCount](undefined)
- [getRandomNumber](undefined)
- [getRegMatchEndOfString](undefined)
- [getRegMatchStartOfString](undefined)
- [hyphenate](undefined)
- [includes](undefined)
- [isInteger](undefined)
- [isNumberParseable](undefined)
- [lowerCase](undefined)
- [match](undefined)
- [normalizeLineBreaks](undefined)
- [pascalCase](undefined)
- [properCase](undefined)
- [randomInt](undefined)
- [removeNonWord](undefined)
- [replaceAccents](undefined)
- [replaceCharacters](undefined)
- [sentenceCase](undefined)
- [slugify](undefined)
- [startsWith](undefined)
- [stringContainsLetter](undefined)
- [stringContainsNumber](undefined)
- [stripHtmlTags](undefined)
- [tg\_isCSSColorSpecial](undefined)
- [tg\_isEmptyString](undefined)
- [tg\_isFalsy](undefined)
- [tg\_isNilLike](undefined)
- [tg\_isNilOrEmpty](undefined)
- [tg\_isNotCSSColorSpecial](undefined)
- [tg\_isNotNilLike](undefined)
- [tg\_isNotNilOrEmpty](undefined)
- [tg\_isNotNullish](undefined)
- [tg\_isNotPrimitive](undefined)
- [tg\_isNotUndefined](undefined)
- [tg\_isNullish](undefined)
- [tg\_isPrimitive](undefined)
- [tg\_isTruthy](undefined)
- [tg\_isUndefined](undefined)
- [toInteger](undefined)
- [transformExplodeArray](undefined)
- [trimCharacters](undefined)
- [trimCharactersEnd](undefined)
- [trimCharactersStart](undefined)
- [truncate](undefined)
- [unCamelCase](undefined)
- [underscore](undefined)
- [unescapeHtml](undefined)
- [unhyphenate](undefined)
- [upperCase](undefined)
- [validateString](undefined)
- [validateStringBatch](undefined)

## Type Aliases

### DeepPartial

Ƭ **DeepPartial**: T extends object ? { [P in keyof T]?: DeepPartial<T[P]\> } : T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/utilities/index.ts:22](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L22)

___

### EmptyObject

Ƭ **EmptyObject**: { [K in string]: never }

#### Defined in

[types/utilities/index.ts:7](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L7)

___

### EmptyString

Ƭ **EmptyString**: ""

#### Defined in

[types/utilities/index.ts:14](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L14)

___

### Falsy

Ƭ **Falsy**: false \| 0 \| "" \| null \| undefined \| "Nan"

#### Defined in

[types/utilities/index.ts:16](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L16)

___

### NilLike

Ƭ **NilLike**: "" \| null \| undefined

#### Defined in

[types/utilities/index.ts:18](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L18)

___

### NilOrEmpty

Ƭ **NilOrEmpty**: EmptyObject \| [] \| "" \| null \| undefined

#### Defined in

[types/utilities/index.ts:17](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L17)

___

### Nullish

Ƭ **Nullish**: null \| undefined

#### Defined in

[types/utilities/index.ts:19](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L19)

___

### NumberParseable

Ƭ **NumberParseable**: (number \| string \| boolean) & Object

A Branded Type for values parseable to number.

#### Defined in

[index.ts:4](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/index.ts#L4)

___

### PlainObject

Ƭ **PlainObject**: Object

#### Index signature

▪ [x: string]: any

#### Defined in

[types/utilities/index.ts:10](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L10)

___

### Primitive

Ƭ **Primitive**: tsPrimitive

#### Defined in

[types/utilities/index.ts:15](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L15)

## Functions

### batchReplaceAll

▸ **batchReplaceAll**(`__namedParameters`): string[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | TransformBatch<ReplaceCharacters\> |

#### Returns

string[]

#### Defined in

[scripts/transformString/_replaceCharacters.ts:32](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_replaceCharacters.ts#L32)

___

### batchTrimCharacters

▸ **batchTrimCharacters**(`__namedParameters`): string[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | TransformBatch<TrimCharacters\> |

#### Returns

string[]

#### Defined in

[scripts/transformString/_trimCharacters.ts:52](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_trimCharacters.ts#L52)

___

### camelCase

▸ **camelCase**(`value`): string

Convert string to camelCase text.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:21](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L21)

___

### cleanBooleanType

▸ **cleanBooleanType**(`value`): string \| boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string \| boolean |

#### Returns

string \| boolean

#### Defined in

[scripts/_valueTypes.ts:27](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/_valueTypes.ts#L27)

___

### cleanIntegerType

▸ **cleanIntegerType**(`value?`, `removeNonDigits?`): singleValue

cleanIntegerType - parses string to integer by removing nondigits ( removeNonDigits ) or parsing only

**`example`**
     cleanIntegerType('2px', true)
     => 2.0

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | singleValue | `false` | value |
| `removeNonDigits` | boolean | `false` | - |

#### Returns

singleValue

#### Defined in

[scripts/_valueTypes.ts:20](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/_valueTypes.ts#L20)

___

### contains

▸ **contains**(`value`, `pattern`): boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |
| `pattern` | string |

#### Returns

boolean

#### Defined in

[scripts/transformString/_validateString.ts:26](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_validateString.ts#L26)

___

### endsWith

▸ **endsWith**(`value`, `pattern`): boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |
| `pattern` | string |

#### Returns

boolean

#### Defined in

[scripts/transformString/_validateString.ts:23](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_validateString.ts#L23)

___

### eq

▸ **eq**(`value`, `pattern`): boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |
| `pattern` | string |

#### Returns

boolean

#### Defined in

[scripts/transformString/_validateString.ts:25](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_validateString.ts#L25)

___

### escapeHtml

▸ **escapeHtml**(`value`): string

Escapes a string for insertion into HTML.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:181](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L181)

___

### escapeUnicode

▸ **escapeUnicode**(`value`, `shouldEscapePrintable?`): string

Escape string into unicode sequences

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | string | `undefined` |
| `shouldEscapePrintable` | boolean | `false` |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:206](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L206)

___

### formatCurrency

▸ **formatCurrency**(`value`, `minimumFractionDigits?`, `currency?`): string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | number | `undefined` |
| `minimumFractionDigits` | number | `2` |
| `currency` | string | `"USD"` |

#### Returns

string

#### Defined in

[scripts/_number.ts:14](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/_number.ts#L14)

___

### get

▸ **get**<`T`, `P1`\>(`obj`, `prop1`): NonNullable<T\>[P1] \| undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P1` | extends string \| number \| symbol |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | T |
| `prop1` | P1 |

#### Returns

NonNullable<T\>[P1] \| undefined

#### Defined in

[types/get.ts:3](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/get.ts#L3)

▸ **get**<`T`, `P1`, `P2`\>(`obj`, `prop1`, `prop2`): NonNullable<NonNullable<T\>[P1]\>[P2] \| undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P1` | extends string \| number \| symbol |
| `P2` | extends string \| number \| symbol |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | T |
| `prop1` | P1 |
| `prop2` | P2 |

#### Returns

NonNullable<NonNullable<T\>[P1]\>[P2] \| undefined

#### Defined in

[types/get.ts:6](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/get.ts#L6)

▸ **get**<`T`, `P1`, `P2`, `P3`\>(`obj`, `prop1`, `prop2`, `prop3`): NonNullable<NonNullable<NonNullable<T\>[P1]\>[P2]\>[P3] \| undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P1` | extends string \| number \| symbol |
| `P2` | extends string \| number \| symbol |
| `P3` | extends string \| number \| symbol |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | T |
| `prop1` | P1 |
| `prop2` | P2 |
| `prop3` | P3 |

#### Returns

NonNullable<NonNullable<NonNullable<T\>[P1]\>[P2]\>[P3] \| undefined

#### Defined in

[types/get.ts:10](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/get.ts#L10)

___

### getDigitCount

▸ **getDigitCount**(`value`): number

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | number |

#### Returns

number

#### Defined in

[scripts/_number.ts:11](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/_number.ts#L11)

___

### getRandomNumber

▸ **getRandomNumber**(`_multiplier?`): number

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_multiplier` | number | `100` |

#### Returns

number

#### Defined in

[scripts/_number.ts:8](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/_number.ts#L8)

___

### getRegMatchEndOfString

▸ **getRegMatchEndOfString**(`pattern`, `flags?`): RegExp

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pattern` | string | `undefined` |
| `flags` | string | `'g'` |

#### Returns

RegExp

#### Defined in

[scripts/transformString/_trimCharacters.ts:90](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_trimCharacters.ts#L90)

___

### getRegMatchStartOfString

▸ **getRegMatchStartOfString**(`pattern`, `flags?`): RegExp

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pattern` | string | `undefined` |
| `flags` | string | `'g'` |

#### Returns

RegExp

#### Defined in

[scripts/transformString/_trimCharacters.ts:89](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_trimCharacters.ts#L89)

___

### hyphenate

▸ **hyphenate**(`value`): string

Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:96](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L96)

___

### includes

▸ **includes**(`value`, `pattern`): boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |
| `pattern` | string |

#### Returns

boolean

#### Defined in

[scripts/transformString/_validateString.ts:24](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_validateString.ts#L24)

___

### isInteger

▸ **isInteger**(`value`): boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | singleValue |

#### Returns

boolean

#### Defined in

[scripts/_valueTypes.ts:9](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/_valueTypes.ts#L9)

___

### isNumberParseable

▸ **isNumberParseable**(`value`): value is NumberParseable

Check if value is parseable to number.

**`example`**
```js
isNumberParseable('AAAA');
//=> false

isNumberParseable('100');
//=> true

if (!isNumberParseable(value))
  throw new Error('Value can\'t be parseable to `Number`.')
return Number(value);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | unknown | An `unknown` value to be checked. |

#### Returns

value is NumberParseable

#### Defined in

[index.ts:24](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/index.ts#L24)

___

### lowerCase

▸ **lowerCase**(`value`): string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:8](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L8)

___

### match

▸ **match**(`value`, `pattern`): boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |
| `pattern` | RegExp |

#### Returns

boolean

#### Defined in

[scripts/transformString/_validateString.ts:27](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_validateString.ts#L27)

___

### normalizeLineBreaks

▸ **normalizeLineBreaks**(`value`, `lineEnd?`): string

Convert line-breaks from DOS/MAC to a single standard (UNIX by default)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | string | `undefined` |
| `lineEnd` | string | `'\n'` |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:121](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L121)

___

### pascalCase

▸ **pascalCase**(`value`): string

camelCase + UPPERCASE first char

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:65](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L65)

___

### properCase

▸ **properCase**(`value`): string

UPPERCASE first char of each word.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:55](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L55)

___

### randomInt

▸ **randomInt**(`min?`, `max?`): number

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `min` | number | `0` |
| `max` | number | `100` |

#### Returns

number

#### Defined in

[scripts/_number.ts:4](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/_number.ts#L4)

___

### removeNonWord

▸ **removeNonWord**(`value`): string

Remove non-word chars.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:115](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L115)

___

### replaceAccents

▸ **replaceAccents**(`value`): string

Replaces all accented chars with regular ones

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:132](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L132)

___

### replaceCharacters

▸ **replaceCharacters**(`__namedParameters`): string

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | ReplaceCharacters |

#### Returns

string

#### Defined in

[scripts/transformString/_replaceCharacters.ts:17](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_replaceCharacters.ts#L17)

___

### sentenceCase

▸ **sentenceCase**(`value`): string

UPPERCASE first char of each sentence and lowercase other chars.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:71](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L71)

___

### slugify

▸ **slugify**(`value`, `delimiter?`): string

Convert to lower case, remove accents, remove non-word chars and
replace spaces with the specified delimeter.
Does not split camelCase text.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | string | `undefined` |
| `delimiter` | string | `"-"` |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:84](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L84)

___

### startsWith

▸ **startsWith**(`value`, `pattern`): boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |
| `pattern` | string |

#### Returns

boolean

#### Defined in

[scripts/transformString/_validateString.ts:22](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_validateString.ts#L22)

___

### stringContainsLetter

▸ **stringContainsLetter**(`value`): boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

boolean

#### Defined in

[scripts/string/_string.ts:4](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_string.ts#L4)

___

### stringContainsNumber

▸ **stringContainsNumber**(`value`): boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

boolean

#### Defined in

[scripts/string/_string.ts:1](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_string.ts#L1)

___

### stripHtmlTags

▸ **stripHtmlTags**(`value`): string

Remove HTML tags from string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:221](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L221)

___

### tg\_isCSSColorSpecial

▸ **tg_isCSSColorSpecial**<`T`\>(`value`): value is CSSColorSpecialProp

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | unknown |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | CSSColorSpecialProp \| T |

#### Returns

value is CSSColorSpecialProp

#### Defined in

[types/index.ts:8](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/index.ts#L8)

___

### tg\_isEmptyString

▸ **tg_isEmptyString**<`T`\>(`value`): value is ""

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | unknown |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | "" \| T |

#### Returns

value is ""

#### Defined in

[types/utilities/index.ts:38](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L38)

___

### tg\_isFalsy

▸ **tg_isFalsy**<`T`\>(`value`): value is Falsy

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | Falsy \| T |

#### Returns

value is Falsy

#### Defined in

[types/utilities/index.ts:27](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L27)

___

### tg\_isNilLike

▸ **tg_isNilLike**<`T`\>(`value`): value is NilLike

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | NilLike \| T |

#### Returns

value is NilLike

#### Defined in

[types/utilities/index.ts:46](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L46)

___

### tg\_isNilOrEmpty

▸ **tg_isNilOrEmpty**<`T`\>(`value`): value is NilOrEmpty

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | NilOrEmpty \| T |

#### Returns

value is NilOrEmpty

#### Defined in

[types/utilities/index.ts:32](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L32)

___

### tg\_isNotCSSColorSpecial

▸ **tg_isNotCSSColorSpecial**<`T`\>(`value`): value is T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | unknown |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | CSSColorSpecialProp \| T |

#### Returns

value is T

#### Defined in

[types/index.ts:12](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/index.ts#L12)

___

### tg\_isNotNilLike

▸ **tg_isNotNilLike**<`T`\>(`value`): value is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | NilLike \| T |

#### Returns

value is T

#### Defined in

[types/utilities/index.ts:48](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L48)

___

### tg\_isNotNilOrEmpty

▸ **tg_isNotNilOrEmpty**<`T`\>(`value`): value is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | NilOrEmpty \| T |

#### Returns

value is T

#### Defined in

[types/utilities/index.ts:34](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L34)

___

### tg\_isNotNullish

▸ **tg_isNotNullish**<`T`\>(`value`): value is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | NilLike \| T |

#### Returns

value is T

#### Defined in

[types/utilities/index.ts:53](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L53)

___

### tg\_isNotPrimitive

▸ **tg_isNotPrimitive**<`T`\>(`value`): value is T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | unknown |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | Primitive \| T |

#### Returns

value is T

#### Defined in

[types/utilities/index.ts:43](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L43)

___

### tg\_isNotUndefined

▸ **tg_isNotUndefined**<`T`\>(`value`): value is T extends NonNullable<T\> ? T : never

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | unknown |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | Nullish \| (T extends NonNullable<T\> ? T : never) |

#### Returns

value is T extends NonNullable<T\> ? T : never

#### Defined in

[types/utilities/index.ts:67](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L67)

___

### tg\_isNullish

▸ **tg_isNullish**<`T`\>(`value`): value is undefined

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | NilLike \| T |

#### Returns

value is undefined

#### Defined in

[types/utilities/index.ts:52](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L52)

___

### tg\_isPrimitive

▸ **tg_isPrimitive**<`T`\>(`value`): value is Primitive

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | unknown |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | Primitive \| T |

#### Returns

value is Primitive

#### Defined in

[types/utilities/index.ts:41](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L41)

___

### tg\_isTruthy

▸ **tg_isTruthy**<`T`\>(`value`): value is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | Falsy \| T |

#### Returns

value is T

#### Defined in

[types/utilities/index.ts:29](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L29)

___

### tg\_isUndefined

▸ **tg_isUndefined**<`T`\>(`value`): value is undefined

Typeguard Undefined : narrows Nullish ( null | undefined )

**`example`**
   const test_value  = 22
   if ( tg_isNotUndefined( test_value) ){
const vallll : LiteralToPrimitive<typeof test_value>   = test_value
}

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | Nullish \| T | description |

#### Returns

value is undefined

-

#### Defined in

[types/utilities/index.ts:66](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/types/utilities/index.ts#L66)

___

### toInteger

▸ **toInteger**(`value`): singleValue

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | singleValue |

#### Returns

singleValue

#### Defined in

[scripts/_valueTypes.ts:6](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/_valueTypes.ts#L6)

___

### transformExplodeArray

▸ **transformExplodeArray**(`__namedParameters`): string[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | ExplodeArray |

#### Returns

string[]

#### Defined in

[scripts/transformString/_transformExplodeArray.ts:7](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_transformExplodeArray.ts#L7)

___

### trimCharacters

▸ **trimCharacters**(`__namedParameters`): string

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | TrimCharacters |

#### Returns

string

#### Defined in

[scripts/transformString/_trimCharacters.ts:35](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_trimCharacters.ts#L35)

___

### trimCharactersEnd

▸ **trimCharactersEnd**(`__namedParameters`): string

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | TrimCharacters |

#### Returns

string

#### Defined in

[scripts/transformString/_trimCharacters.ts:78](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_trimCharacters.ts#L78)

___

### trimCharactersStart

▸ **trimCharactersStart**(`__namedParameters`): string

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | TrimCharacters |

#### Returns

string

#### Defined in

[scripts/transformString/_trimCharacters.ts:68](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_trimCharacters.ts#L68)

___

### truncate

▸ **truncate**(`value`, `maxChars?`, `append?`, `onlyFullWords?`): string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | string | `undefined` |
| `maxChars` | number | `200` |
| `append` | string | `'...'` |
| `onlyFullWords` | boolean | `true` |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:159](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L159)

___

### unCamelCase

▸ **unCamelCase**(`value`): string

Add space between camelCase text.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:42](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L42)

___

### underscore

▸ **underscore**(`value`): string

Replaces spaces with underscores, split camelCase text, remove
non-word chars, remove accents and convert to lower case.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:109](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L109)

___

### unescapeHtml

▸ **unescapeHtml**(`value`): string

Unescapes HTML special chars

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:194](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L194)

___

### unhyphenate

▸ **unhyphenate**(`value`): string

Replaces hyphens with spaces. (only hyphens between word chars)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:102](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L102)

___

### upperCase

▸ **upperCase**(`value`): string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | string |

#### Returns

string

#### Defined in

[scripts/string/_stringUtils.ts:11](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/string/_stringUtils.ts#L11)

___

### validateString

▸ **validateString**(`value`, `pattern`, `validate_op?`): boolean

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | string | `undefined` |
| `pattern` | string \| RegExp | `undefined` |
| `validate_op` | validateOperation | `"eq"` |

#### Returns

boolean

#### Defined in

[scripts/transformString/_validateString.ts:29](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_validateString.ts#L29)

___

### validateStringBatch

▸ **validateStringBatch**(`value`, `validateObjects?`, `operation?`): boolean

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | string \| IValidateObj[] | `undefined` |
| `validateObjects?` | Omit<IValidateObj, "value"\>[] | `undefined` |
| `operation` | "some" \| "every" | `"some"` |

#### Returns

boolean

#### Defined in

[scripts/transformString/_validateString.ts:37](https://github.com/gbtunney/snailicide/blob/99c272b/packages/g-library/src/scripts/transformString/_validateString.ts#L37)
