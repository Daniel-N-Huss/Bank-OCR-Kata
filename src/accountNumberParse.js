const pipeNumberParse = require("./pipeNumberParse")


const accountNumberParse = (accountNumberAsPipes) => {
  if (!accountNumberAsPipes) {
    return null
  }

  const numberRows = accountNumberAsPipes.split("\n")

  const topRow = numberRows[0].match(/.{1,3}/g) //regex to place into 3 character groups
  const middleRow = numberRows[1].match(/.{1,3}/g)
  const bottomRow = numberRows[2].match(/.{1,3}/g)

  let result = ""

  for (let i = 0; i < 9; i++) {
    const numberPipeSet = [topRow[i], middleRow[i], bottomRow[i]]

    result += pipeNumberParse(numberPipeSet)
  }

  return result
}

module.exports = accountNumberParse