const accountNumberParse = require("../src/accountNumberParse")

describe("when given no input", () => {
  test("it returns null", () => {
    expect(accountNumberParse()).toBe(null)
  })
})

describe("when given all zeros", () => {
  const numberSet =
    ` _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|

`
  test("it returns account number 000000000", () => {
    expect(accountNumberParse(numberSet)).toBe("000000000")
  })
})

describe("when given all ones", () => {
  const numberSet =
    `                           
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |
  
`
  test("it returns account number 111111111", () => {
    expect(accountNumberParse(numberSet)).toBe("111111111")
  })
})

describe("when given all numbers", () => {
  const numberSet =
    `    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
`
  test("it returns account number 123456789", () => {
    expect(accountNumberParse(numberSet)).toBe("123456789")
  })
})