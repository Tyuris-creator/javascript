// условие ? Выражение 1: Выражение 2

const value1 = 11
const value2 = '1'

const a = typeof value1 === 'number' && typeof value2 === 'number' ? value1 + value2 : value1 - 2
console.log(a) 

let age = 21;
let message = age >= 18 ? 'You are adult!' : 'You are minor!'
console.log(message)


let purchaseAmount = 99;
let discount = purchaseAmount >= 95 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);