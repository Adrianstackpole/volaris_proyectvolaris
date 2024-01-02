const fillReferenceNumber = (str) => {
  if (str.length < 4) {
    let arr = str.split('')
    for (let i = 0; i < 4 - str.length; i++) {
      arr = ['0', ...arr]
    }
    str = arr.join('')
  }
  return str
}

module.exports = fillReferenceNumber