function inverte (string) {
  let reverseString = ''

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i]
  }
  console.log(reverseString)
}

inverte('Essa vaga é minha !!')
inverte('!! ahnim é agav assE')
