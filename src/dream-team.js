const CustomError = require('../extensions/custom-error')

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let arr = []
  members.forEach((person) => {
    if (typeof person == 'string') {
      const symbol = person.trim()[0].toUpperCase()
      arr.push(symbol)
    }
  })
  return arr.sort().join('')
}
