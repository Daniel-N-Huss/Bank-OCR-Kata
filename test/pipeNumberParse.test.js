const pipeNumberParse = require("../src/pipeNumberParse")

const zeroFixture =
` _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|

`
// => 000000000`


describe("when given no input", () => {
  test("it returns null", () => {
    expect(pipeNumberParse()).toBe(null)
  })
})

describe("when given a single example set of all zero characters", () => {
  test("it returns an account number of all 0's", () =>{
    expect(pipeNumberParse(zeroFixture)).toBe('000000000')
  })
})