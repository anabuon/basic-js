module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error()
  }
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next' && arr[i + 1] !== undefined) {
      i++
    } else if (
      arr[i] == '--discard-prev' &&
      arr[i - 1] !== undefined &&
      arr[i - 2] != '--discard-next'
    ) {
      result.pop()
    } else if (arr[i] == '--double-next' && arr[i + 1] !== undefined) {
      result.push(arr[i + 1])
    } else if (
      arr[i] == '--double-prev' &&
      arr[i - 1] !== undefined &&
      arr[i - 2] != '--discard-next'
    ) {
      result.push(arr[i - 1])
    } else if (
      arr[i] != '--double-prev' &&
      arr[i] != '--double-next' &&
      arr[i] != '--discard-prev' &&
      arr[i] != '--discard-next'
    ) {
      result.push(arr[i])
    }
  }
  return result
}
