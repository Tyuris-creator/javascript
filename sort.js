// sort method used to sort elements of an array in place
// lexigraphic order not alphabetical
let numbers = [1,10,3,4,2,5,6,7,8,7,4,5,9,11,12,13,14,8,19,16];

numbers.sort((a,b) => a - b)
console.log(numbers)

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patric", age: 37, gpa: 1.0},
                {name: "Squidward", age: 50, gpa: 2.0},
                {name: "Sandy", age: 27, gpa: 4.0}]

people.sort((a, b) => a.age - b.age);

people.sort((a,b) => a.name.localeCompare(b.name))

console.log(people[0]['name']);
