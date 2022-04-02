const { readFile } = require("fs.promises")
// import { readFile } from "fs/promises";

const accountListParse = async (filePath) => {
  if (!filePath) {
    return null
  }

  const accountList = await readFile(filePath, {encoding: "utf8"})

  return accountList
}

module.exports = accountListParse