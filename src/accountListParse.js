const { readFile } = require("fs.promises")
const accountNumberParse = require("./accountNumberParse")


const accountListParse = async (filePath) => {
  if (!filePath) {
    return null
  }

  const accountList = await readFile(filePath, { encoding: "utf8" })

  const splitLines = accountList.split("\n")

  let result = ""

  for ( let i = 0; i < splitLines.length; i += 4) {
    const nextAccountNumber = splitLines.slice(i, i+3).join("\n")

    result += "\n"
    result += accountNumberParse(nextAccountNumber)
  }

  return result
}

module.exports = accountListParse