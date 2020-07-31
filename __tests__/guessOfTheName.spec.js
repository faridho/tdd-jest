const guessOfTheName = require("../src/guessOfTheName")

describe("Promise Function", () => {
    test("It should return right name", () => {
        const output = "you are right"

        return guessOfTheName.then(result => {
            expect(result).toBe(output)
        })
    })
})