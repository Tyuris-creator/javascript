const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById("resultElement")
let age;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);

    if (age > 100) {
        resultElement.textContent = 'You are too old!'
    }

    if (age === 18) {
        resultElement.textContent = "You can't enter. You were just born!"
    }

    if (age > 19) {
        resultElement.textContent = 'Welcome'
    }

    else if (age < 0) {
        resultElement.textContent = "Your age can't be below zero"
    }

    else {
        resultElement.textContent = 'You must be 18+ to enter this website'
} }
