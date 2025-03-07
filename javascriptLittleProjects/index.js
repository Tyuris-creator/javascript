let x = 1;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);



// math built in object that providex a colletction of properties and methods

//let x = 3.21;
//let y = 2;
//let z;

let userName = 'Tyuris';
console.log(userName.charAt(0))
console.log(userName.trim())
console.log(userName.toUpperCase())
console.log(userName.toLowerCase())
let res = userName.startsWith('T');
console.log(res)
let phoneNumber = '123-456-7890'
phoneNumber = phoneNumber.padEnd(15,"0");
console.log(phoneNumber)

const fullName = "Bro Code";

let firstName = fullName.slice(0,3);

let myName = 'Michail  Tyuris'
let first = myName.slice(0, myName.indexOf(" "))
let second = myName.slice(myName.indexOf("T"),)
console.log(`You name is ${first} ${second}`)


let username = ' BroCode ';

// METHOD chaining
let usernameChainingMethod = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(usernameChainingMethod)

// NO CHAINING
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;
console.log(username)

// = assignement operator оператор присваивания
// == comparison operator оператор сравнения
// === strict equality operator (строгий оператор сравнения (сравнение не только значения но и типа данных))
// != оператор неравенства inequality operator
// !== строгий оператор неравенства strict inequality operator
