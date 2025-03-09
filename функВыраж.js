// function declaration = define a resuable block of code 
// that performs a specific tasks

function hello1(){
    console.log('Hello!');
}

// function expressions = a way to define functions as values or variables
const hello2 = function(){
    console.log('Hello')
}

hello2()


setTimeout(function(){console.log("Hello!")}, 3000)