const pipeNumberParse = require("../src/pipeNumberParse")

describe("when given no input", () => {
  test("it returns null", () => {
    expect(pipeNumberParse()).toBe(null)
  })
})

describe("when given a pattern that matches zero", () => {
  const pipePatterns = [' _ ', '| |', '|_|']
  test("it returns string '0'", () =>{
    expect(pipeNumberParse(pipePatterns)).toBe('0')
  })
})

describe("when given a pattern that matches one", () => {
  const pipePatterns = ['   ', '  |', '  |']
  test("it returns string '1'", () =>{
    expect(pipeNumberParse(pipePatterns)).toBe('1')
  })
})

describe("when given a pattern that matches two", () => {
  const pipePatterns = [' _ ', ' _|', '|_ ']
  test("it returns string '2'", () =>{
    expect(pipeNumberParse(pipePatterns)).toBe('2')
  })
})

describe("when given a pattern that matches three", () => {
  const pipePatterns = [' _ ', ' _|', ' _|']
  test("it returns string '3'", () =>{
    expect(pipeNumberParse(pipePatterns)).toBe('3')
  })
})

describe("when given a pattern that matches four", () => {
  const pipePatterns = ['   ', '|_|', '  |']
  test("it returns string '4'", () =>{
    expect(pipeNumberParse(pipePatterns)).toBe('4')
  })
})

describe("when given a pattern that matches five", () => {
  const pipePatterns = [' _ ', '|_ ', ' _|']
  test("it returns string '5'", () =>{
    expect(pipeNumberParse(pipePatterns)).toBe('5')
  })
})

describe("when given a pattern that matches six", () => {
  const pipePatterns = [' _ ', '|_ ', '|_|']
  test("it returns string '6'", () =>{
    expect(pipeNumberParse(pipePatterns)).toBe('6')
  })
})

describe("when given a pattern that matches seven", () => {
  const pipePatterns = [' _ ', '  |', '  |']
  test("it returns string '7'", () =>{
    expect(pipeNumberParse(pipePatterns)).toBe('7')
  })
})

describe("when given a pattern that matches eight", () => {
  const pipePatterns = [' _ ', '|_|', '|_|']
  test("it returns string '8'", () =>{
    expect(pipeNumberParse(pipePatterns)).toBe('8')
  })
})

describe("when given a pattern that matches nine", () => {
  const pipePatterns = [' _ ', '|_|', ' _|']
  test("it returns string '9'", () =>{
    expect(pipeNumberParse(pipePatterns)).toBe('9')
  })
})