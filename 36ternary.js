// условие ? Выражение 1: Выражение 2

const value1 = 11
const value2 = '1'

const a = typeof value1 === 'number' && typeof value2 === 'number' ? value1 + value2 : value1 - 2
console.log(a) 