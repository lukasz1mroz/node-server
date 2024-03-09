export const countWordsCononantsVowels = (question: string) => {
  const words = question.split(/\s+/).filter((word) => word.length > 0)
  const wordCount = words.length

  const consonants = question.match(/[bcdfghjklmnpqrstvwxyz]/gi)
  const consonantCount = consonants ? consonants.length : 0

  const vowels = question.match(/[aeiou]/gi)
  const vowelCount = vowels ? vowels.length : 0

  return `Provided sentence "${question}" has ${wordCount} words, ${consonantCount} consonants, and ${vowelCount} vowels`
}

export const addNumbers = (question: string) => {
  const splitRegex = /[^0-9]/g
  const numbers = question.split(splitRegex).map((num) => parseInt(num) || 0)
  if (numbers.length === 0) {
    return {
      data: 'No numbers provided',
      status: 400,
    }
  }
  const sum = numbers.reduce((a, b) => a + b, 0)

  return `The sum of provided numbers is ${sum}`
}
