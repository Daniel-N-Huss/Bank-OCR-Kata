const accountListParse = require("../src/accountListParse")

describe("when given no parameters", () => {
  it("returns null", () => {
    expect(accountListParse()).toBe(null)
  })
})