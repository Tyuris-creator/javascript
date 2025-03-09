// object is a collection of related properties and/or methods
// can represent real world objects (people, products, places)


const person = {
    firstName: "SpongeBob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am SpongeBob")}
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);

const person2 = {
    firstName: "Patric",
    lastName: "Star",
    age: 42,
    isEmployed: false,
}

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person.sayHello()

for (const value of Object.values(person2)) {
    console.log(value)
}
for (const key of Object.keys(person2)) {
    console.log(key)
}

for (const key in person2) {
    console.log(key, person2[key])
}