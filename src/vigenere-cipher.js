class VigenereCipheringMachine {
  constructor(flag) {
    this.flag = flag
  }

  encrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error()
    }

    let string = ''
    let count = 0

    message = message.toUpperCase()
    key = key.toUpperCase()

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        string += String.fromCharCode(
          ((message.charCodeAt(i) -
            65 +
            key.charCodeAt(count % key.length) -
            65) %
            26) +
            65
        )
        count++
      } else {
        string += message[i]
      }
    }

    if (this.flag === undefined) {
      return string
    } else {
      return string.split('').reverse().join('')
    }
  }

  decrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw Error
    }

    let string = ''
    let count = 0

    message = message.toUpperCase()
    key = key.toUpperCase()

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        string += String.fromCharCode(
          ((message.charCodeAt(i) + 26 - key.charCodeAt(count % key.length)) %
            26) +
            65
        )
        count++
      } else {
        string += message[i]
      }
    }

    if (this.flag === undefined) {
      return string
    } else {
      return string.split('').reverse().join('')
    }
  }
}

module.exports = VigenereCipheringMachine
