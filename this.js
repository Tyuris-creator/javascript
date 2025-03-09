// this = reference to the object where THIS is used
// (the object depends on the immediate context)
// person.name = this.name

const person1 = {
    name: 'Spongebob',
    favFood: 'hamburgers',
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: () => {console.log(`${person1.name} is eating ${person1.favFood}`)},
}
person1.eat()
person1.sayHello()