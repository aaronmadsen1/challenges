const allWordsUpperCase = sentence => {
  let toList = sentence.toLowerCase().split(" ")
  for (i = 0; i < toList.length; i++) {
    toList[i] = toList[i].charAt(0).toUpperCase() + toList[i].slice(1)
  }
  return toList.join(" ")
}

allWordsUpperCase("Hello how are y'alls today")
