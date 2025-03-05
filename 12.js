const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    person.age += 1
    return person
} // внутри функции не рекомендуется менять внешние объекты passing bt refference

increasePersonAge(personOne)
console.log(personOne)