const convertDollarToRupiah = require("../src/convertDollarToRupiah")

describe("Callback Function", () => {
    test("Test Convert Rupiah To Dollar", done => {
        const output = 140000
        convertDollarToRupiah(10, result => {
            expect(result).toBe(output)
            done()
        })
    })
})