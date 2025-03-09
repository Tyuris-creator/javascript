// destructuring = extract values from arrays or objects, then assing
// them to variables in a convinient way
// [] - to perform array destructuring
// {} - to perform object destructuring

let a = 1;

let b = 2;

[a,b] = [b,a]

console.log(a)
console.log(b)



const colors = ['red', 'green', 'blue', 'black', 'white'];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors)

const colors2 = [...colors]
colors2[1] = 'greenModified'

console.log(colors)
console.log(colors2)

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patric",
    lastName: "Star",
    age: 34,
}


const info = {firstName, lastName, age, job="Unemployed"} = person2;
console.log(job)