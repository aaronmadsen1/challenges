// A much cleaner method of converting an integer to binary and counting the number of bits
const countBits = n => {
  numOfBits = n
    .toString(2) // to binary
    .split("0")
    .join("").length // bit count
  return numOfBits
}

countBits(156)
