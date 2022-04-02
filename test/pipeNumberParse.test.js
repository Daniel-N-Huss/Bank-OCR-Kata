const pipeNumberParse = require("./src/pipeNumberParse")


describe("when given no input", () => {

  test("it returns null", () => {
    expect(pipeNumberParse().toBe(null))
  })
})