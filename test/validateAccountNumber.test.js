const validateAccountNumber = require("../src/validateAccountNumber")


describe("when given no parameter", () => {
  test("it returns false", () => {
    expect(validateAccountNumber()).toBe(false)
  })
})