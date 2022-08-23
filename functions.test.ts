const {shuffleArray} = require('./utils')

const testArr1 = []
const testArr2 = [1, 2, 3, 4, 5, 6, 7]

describe('shuffleArray should shuffle through our array', () => {
    //check that shuffleArray returns an array
    test(`should return an array`, () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBeTruthy()
        expect(Array.isArray(shuffleArray(testArr2))).toBeTruthy()
    })
    test(`should return an array of the same length as the argument sent in`, () => {
        expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)
        expect(shuffleArray(testArr2)).toHaveLength(testArr2.length)
        })
    })