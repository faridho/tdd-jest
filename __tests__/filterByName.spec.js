const filterByName = require("../src/filterByName")
describe("Filter function", () => {
    test("It should filter by a search term (name)", () => {
    const input = [
      { id: 0, name: "Faridho" },
      { id: 1, name: "Leonardhio" },
      { id: 2, name: "Faridho Leonardhio" }
    ]
    const output = [{ id: 1, name: "Leonardhio" }]
    expect(filterByName(input, "Leonardhio")).toEqual(output)
   })
})