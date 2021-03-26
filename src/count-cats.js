module.exports = function countCats(backyard) {
  const cat = '^^'
  let count = 0

  backyard.flat().reduce((previtem, item) => {
    item === cat ? count++ : count
  }, 0)
  return count
}
