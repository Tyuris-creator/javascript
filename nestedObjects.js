// nested objects = objects inside of other objects
// alows represent more complex data structures 
// child object is enclosed by a parent object
// person{address{}, contactinfo{}}
// shoppingcart {keyboard{}, mouse{}, monitor{}}

/*
const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.street)
console.log(person.address.city)
console.log(person.address.country)
*/

class Address {
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class Person {
    constructor(name, city, ...address){
        this.name = name;
        this.city = city;
        this.address = new Address(...address)
    }
}

const person1 = new Person("SpongeBob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters")
const person2 = new Person("Patric", 37, "128 Conch St.", "Bikini Bottom", "Int. Waters")
const person3 = new Person("Squidward", 45, "128 Conch St.", "Bikini Bottom", "Int. Waters")

console.log(person3['address']['street'])