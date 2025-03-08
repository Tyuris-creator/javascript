// как избежать мутаций

const person = {
    name: 'Bob',
    age: 25
}

const person2 = Object.assign({}, person) // создаёт новый объект беря шаблон с первого 

person2.age = 26

console.log(person2.age) // 26
console.log(person.age) // 25

const person3 = {...person} // spread оператор новая ссылка на новый объект в памяти тоже есть мутации

const person4 = JSON.parse(JSON.stringify(person)) // это без мутаций объект в json, json в объект и все сохраняем в переменную

person4.name = "Misha";
console.log(person3)
