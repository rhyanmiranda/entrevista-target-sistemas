function fibonacci (number) {
  let previous = 0
  let current = 1
  let next = 0
  let array = []

  for (let i = 0; i < number; i++){ 
    array.push(next)
    previous = current + next
    current = next
    next = previous
  }

  if(array.includes(number)){
    console.log(`O número informado: ${number} pertence a sequência de Fibonacci !`)
  } else {
    console.log(`O número informado: ${number} não pertence a sequência de Fibonacci !`)
  }

  console.log(array + "...")

}

fibonacci(10) // testando com o número 10, que não pertence a sequência 
fibonacci(13) // testando com o número 13, que esse sim pertence a sequência 


