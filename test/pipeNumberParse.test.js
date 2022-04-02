const pipeNumberParse = require("../src/pipeNumberParse")

const zeroFixture =
` _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|

`
// => 000000000`

const zeroInput = [' _ ', '| |', '|_|']
const oneInput = ['   ', '  |', '  |']
const twoInput = [' _ ', ' _|', '|_ ']
const threeInput = [' _ ', ' _|', ' _|']
const fourInput = ['   ', '|_|', '  |']
const fiveInput = [' _ ', '|_ ', ' _|']
const sixInput = [' _ ', '|_ ', '|_|']
const sevenInput = [' _ ', '  |', '  |']

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

describe("when given a pattern that matches one", () => {
  test("it returns string '1'", () =>{
    expect(pipeNumberParse(oneInput)).toBe('1')
  })
})

describe("when given a pattern that matches two", () => {
  test("it returns string '2'", () =>{
    expect(pipeNumberParse(twoInput)).toBe('2')
  })
})

describe("when given a pattern that matches three", () => {
  test("it returns string '3'", () =>{
    expect(pipeNumberParse(threeInput)).toBe('3')
  })
})

describe("when given a pattern that matches four", () => {
  test("it returns string '4'", () =>{
    expect(pipeNumberParse(fourInput)).toBe('4')
  })
})

describe("when given a pattern that matches five", () => {
  test("it returns string '5'", () =>{
    expect(pipeNumberParse(fiveInput)).toBe('5')
  })
})

describe("when given a pattern that matches six", () => {
  test("it returns string '6'", () =>{
    expect(pipeNumberParse(sixInput)).toBe('6')
  })
})

describe("when given a pattern that matches seven", () => {
  test("it returns string '7'", () =>{
    expect(pipeNumberParse(sevenInput)).toBe('7')
  })
})