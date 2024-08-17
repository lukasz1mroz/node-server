let test1 = '1'
let test2 = 2
let test3 = '1' as unknown as number

type User = {
  name: string
  age: number | string
}

const lukasz: User = {
  name: 'lukasz',
  age: 'unknonwn',
}

type StringArray = Array<String>

const names: StringArray = ['lukasz', 'tomasz']
