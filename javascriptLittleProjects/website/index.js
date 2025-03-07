//console.log('hello');
//console.log('I like pizza')

//window.alert('This is an alert');
//window.alert('This is an alert');
//console.log('hello');
//console.log('I like pizza')

// this is a comment

/* 
THIS IS A COMMENT
*/
/*
document.getElementById("myh1").textContent = 'Hell111';
document.getElementById("myp").textContent = 'I like pizza';
let a = document.getElementById("myh1").textContent
console.log(a)
a = 'hello!!!!!!!';
document.getElementById("myh1").textContent = a;

let x = 123;
console.log(x)
// variable a container that stores a value


console.log(`You are ${age}`);
console.log(typeof x);

let firstName = 'Pavel';
console.log(typeof firstName)

let online = true;
console.log(typeof online)
console.log(`Bro is online: ${online}`)
*/
//let fullName = `Pavel`
//let age = 40
//let student = false

//document.getElementById('p1').textContent = fullName
//document.getElementById('p2').textContent = `Your age is ${age} years old!`
//document.getElementById('p3').textContent = student

//let students = 30;
//students = student + 1

//students = students - 1

//students = students / 2
//console.log(students)
//students = students ** 2
//console.log(students)


//let username;
//username = window.prompt("What's your name? ")
//console.log(username)

/*
let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("submit").value;
    console.log(username)
    document.getElementById("myh1").textContent = `Hello ${username}`;
}

*/

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mysubmit").onclick = function() {
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumference + "cm";
}
