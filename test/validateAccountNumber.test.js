const validateAccountNumber = require("../src/validateAccountNumber")


describe("when given no account number", () => {
  test("it returns false", () => {
    expect(validateAccountNumber()).toBe(false)
  })
})

describe("when given a valid account number", () => {
  const validNumber = "123456789"
  test("it returns true", () => {
    expect(validateAccountNumber(validNumber)).toBe(true)
  })
})