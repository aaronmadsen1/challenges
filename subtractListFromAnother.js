// Cleaned up
function array_diff(a, b) {
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] === b[i]) {
        a.splice(j, 1)
        j--
      }
    }
  }
  return a
}

array_diff([3, 3, 1, 2, 3, 2], [2, 4, 2, 1])

// with console.logs
function array_diff(a, b) {
  for (let i = 0; i < b.length; i++) {
    console.log(`i ${i} ${b[i]}`)

    for (let j = 0; j < a.length; j++) {
      console.log(`      j ${j} ${a[j]}`)
      console.log(`            List A ${a}`)

      if (a[j] === b[i]) {
        a.splice(j, 1)
        j--
      }
    }
  }
  return a
}

array_diff([3, 3, 1, 2, 3, 2], [2, 4, 2, 1])
