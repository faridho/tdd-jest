const { stockAvailable, minimumStock } = require("../src/checkStock")


var products = ["Milk Tea", "Thai Tea", "Buble Tea"]

beforeAll(() => {
    return products
})

beforeEach(() => {
    const newProduct = "Milk Shake"
    products.push({
        newProduct
    })
})

afterEach(() => {
    products.splice(3, 1)
})

afterAll(() => {
    products = []
})

describe("Set Up and Teardown", () => {
    test("Test available stock", () => {
        expect(stockAvailable(products)).toBeTruthy()
    })

    test("Test minimum stock", () => {
        expect(minimumStock(products)).toBeTruthy()
    })
})



