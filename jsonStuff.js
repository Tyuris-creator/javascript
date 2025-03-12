// json = javascript object notation data interchange format
// used for exchanging date between a server and a web application
// json files {key:values} or [val1,val2,val3]

// JSON.stringify() = converts a JS object to a JSON string
// JSON.parse() = converts JSON string to JS object

const names = ["Spongebob", "Patric", "Squidward", "Sandy"]

const jsonString = JSON.stringify(names);

console.log(names)
console.log(jsonString)

const person = {
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies":["Cooking", "Karate", "Jellyfishing"]
}

const jsonString1 = JSON.stringify(person)
console.log(person)
console.log(jsonString1)


const people = [{
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies":["Cooking", "Karate", "Jellyfishing"]
},
{
    "name":"Patric",
    "age": 28,
    "isEmployed": false
},
{
    "name":"Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name":"Sandy",
    "age": 27,
    "isEmployed": false
}
]

const jsonString2 = JSON.stringify(people)

console.log(people)
console.log(jsonString2)


console.log(JSON.parse(jsonString))
console.log(JSON.parse(jsonString1))
console.log(JSON.parse(jsonString2))

