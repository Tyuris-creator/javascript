// dom - document object model
// object that represents the page you see in the web browser
// and provides you with an API to interact with it
// web browser constructs the dom when it loads an html document
// and structures all the elements in a tree like representations
// js can accesss the dom to dynamically
// change the content, structure, and style of a web page.

document.title = 'My website';
document.body.style.backgroundColor = 'black';

console.dir(document);

const welcome = document.getElementById("header");
welcome.textContent = "Hi!"
welcome.style.color = "white";


// element selectors = methods used to target and manipulate HTML
// elements they allow you to select one or multiply
// html elements from the DOM 
// 1. document.getElementById() // element or null
// 2. document.getElementsByClassName() // html collection
// 3. document.getElementsByTagName() // html collection
// 4. document.querySelector() // element or NULL
// 5. document.querySelectorAll() // NODELIST

const paragraph = document.getElementById("p");
paragraph.style.backgroundColor = "blue";
paragraph.textContent = "Hello, world!"
paragraph.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");
console.log(fruits)
fruits[0].style.color = "white";
fruits[1].style.color = "white";
fruits[2].style.color = "white";

const containerOfFruits = document.getElementsByClassName("container")
console.log(containerOfFruits)
containerOfFruits[0].style.backgroundColor = "grey"
containerOfFruits[0].style.width = "200px"

for (let fruit of fruits){
    fruit.style.color = "blue"
}

Array.from(fruits).forEach(fruit => {
    fruit.style.border = "20px solid green";
});

const h4Elements = document.getElementsByTagName("h4")

console.log(h4Elements)

h4Elements[0].style.backgroundColor="yellow";

h4Elements[1].style.backgroundColor="yellow";

for (let h4Element of h4Elements){
    h4Element.style.backgroundColor = "aquamarine"
}

const liElements = document.getElementsByTagName("li")

for (let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen"
}

const element = document.querySelector(".fruits")
element.style.backgroundColor = "blue"
element.textContent = "Apple(modified)"
element.style.color = "white"

const foods = document.querySelectorAll("li");
foods.forEach((food) => {food.style.backgroundColor = "black"; food.style.color ="white"})