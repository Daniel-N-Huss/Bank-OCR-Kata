const accountNumberParse = require("../src/accountNumberParse")

describe("when given no input", () => {
  test("it returns null", () => {
    expect(accountNumberParse()).toBe(null)
  })
})