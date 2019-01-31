const sentenceA = 'Hello World!'
const sentenceB = 'Good Bye!'

console.log(sentenceA.toLowerCase())
console.log(sentenceB.toUpperCase())

const sentenceC = `${sentenceA} ${sentenceB}`
console.log(sentenceC)

function convertName(name) {
  const splittedNames = name.split(' ')

  const result = splittedNames.map(text => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  })
  return result.toString()

  // let result2 = []

  // for (let index = 0; index < splittedNames.length; index++) {
  //   const text = splittedNames[index]
  //   result2.push(text.charAt(0).toUpperCase() + text.slice(1))
  // }

  // console.log(result)
}

console.log(convertName('fadhila fajrin bramantio'))
