const accountListParse = require("../src/accountListParse")

describe("when given no filepath", () => {
  test("it returns null", () => {
    return accountListParse().then( data => {
      expect(data).toBe(null)
    } )
  })
})

describe("when given a filepath", () => {
  const expectedAccountNumbers =
    `000000000
    111111111
    222222222
    333333333
    444444444
    555555555
    666666666
    777777777
    888888888
    999999999
    123456789`
  test("it returns valid accounts", () => {
    return(accountListParse("test/fixtures/sampleAccountList.txt")).then( data => {
      expect(data).toBe(expectedAccountNumbers)
    })
  })
})