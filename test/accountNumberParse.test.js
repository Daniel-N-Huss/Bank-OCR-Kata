const accountNumberParse = require("../src/accountNumberParse")


const zeroFixture =
  ` _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|

`
// => 000000000`


const oneFixture =
  `                           
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |
  
`

// => 111111111`


describe("when given no input", () => {
  test("it returns null", () => {
    expect(accountNumberParse()).toBe(null)
  })
})

describe("when given all zeros", () => {
  test("it returns account number 000000000", () => {
    expect(accountNumberParse(zeroFixture)).toBe("000000000")
  })
})

describe("when given all ones", () => {
  test("it returns account number 111111111", () => {
    expect(accountNumberParse(oneFixture)).toBe("111111111")
  })
})