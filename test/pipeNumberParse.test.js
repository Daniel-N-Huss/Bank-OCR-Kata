const pipeNumberParse = require("../src/pipeNumberParse")

const zeroFixture =
` _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|

`
// => 000000000`

const zeroInput = [' _ ', '| |', '|_|']


describe("when given no input", () => {
  test("it returns null", () => {
    expect(pipeNumberParse()).toBe(null)
  })
})

describe("when given a pattern that matches zero", () => {
  test("it returns string '0'", () =>{
    expect(pipeNumberParse(zeroInput)).toBe('0')
  })
})