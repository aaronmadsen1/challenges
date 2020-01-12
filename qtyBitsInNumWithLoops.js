// Converts a non-negative integer to binary and counts number of bits manually with loops

const countBits = inputNumber => {
  const divisorList = [inputNumber]
  const binaryList = []
  let numOfBits = 0
  let placeholder1 = inputNumber

  if (inputNumber > 0 && Number.isInteger(inputNumber)) {
    while (placeholder1 !== 1) {
      let placeholder2 = Math.floor(placeholder1 / 2)
      divisorList.unshift(placeholder2)
      placeholder1 = placeholder2
    }
    for (i = 0; i < divisorList.length; i++) {
      if (divisorList[i] % 2 === 1) {
        binaryList.push(1)
      } else {
        binaryList.push(0)
      }
    }
    for (i = 0; i < divisorList.length; i++) {
      if (divisorList[i] % 2 === 1) {
        numOfBits++
      }
    }
  } else if (inputNumber === 0) {
    numOfBits = 0
  } else {
    alert("Please enter a non-negative integer")
    numOfBits = null
  }
  const binaryNumber = binaryList.join("")
  console.log(binaryNumber)
  return numOfBits
}

countBits(156)
