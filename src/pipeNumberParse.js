
const pipeNumberParse = (pipeNumberPatterns) => {
  if (!pipeNumberPatterns) {
    return null
  }

  if (pipeNumberPatterns[0] === "   ") {
    return "1"
  }

  if (pipeNumberPatterns[1] === ' _|' ) {
    return "2"
  }

    return "0"
}

module.exports = pipeNumberParse

 /*
 _  _  _  _  _  _  _  _  _
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|

`

  */

//grab chunks of 3
//narrow down from first line?

/*

possible top row patterns: 2

' _ ', '   '


Possible middle row patters: 5

'| |', '  |', ' _|', '|_|', '|_ ',


Possible bottom patterns: 4

'|_|', '  |', '|_ ', ' _|'

_______

 */


