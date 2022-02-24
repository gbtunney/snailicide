import faker from '@faker-js/faker';

export const useFakerJS = () => {
    const {lorem, random} = faker
    const FakerShortCuts = {
        default: lorem.word,
        paragraph: lorem.paragraph,
        paragraphs: lorem.paragraphs,
        sentence: lorem.sentence,
        sentences: lorem.sentences,
        words: lorem.words,
        number: random.number,
        float: random.float,

        get p() {
            return this.paragraph
        },
        get ps() {
            return this.paragraphs
        },
        get s() {
            return this.sentence
        },
        get ss() {
            return this.sentences
        },
        get word() {
            return this.default
        },
        get w() {
            return this.word
        },
        get ws() {
            return this.words
        },
        get h() {
            return this.words
        },
        get int() {
            return this.number
        },
        get n() {
            return this.number
        },
        get f() {
            return this.float
        },
        get d() {
            return this.float
        }
    }
    return {
        ...faker,
        ...FakerShortCuts
    }
}
export default useFakerJS
