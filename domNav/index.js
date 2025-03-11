// dom navigation = the proces of navigating through the structure
// of an html document using js

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

const el = document.getElementById("fruits");

const firstChild = el.firstElementChild;
firstChild.style.backgroundColor = "aquamarine"
const lastChild = el.lastElementChild
lastChild.style.color = "green"


const ulElements = document.querySelectorAll("ul")

ulElements.forEach(ulElements => {
    ulElements.style.color = "red";
})

const ulElementss = document.querySelectorAll("ul")

ulElementss.forEach(ulElementsss => {
    const lastChild = ulElementsss.lastElementChild;
    lastChild.style.backgroundColor = "red" 
})


const parent = document.getElementById("desserts").parentElement
parent.style.backgroundColor = "black"

const childrenOfDoc = document.getElementsByTagName("ul")
for (let child of childrenOfDoc) {
    child.style.backgroundColor = "white";
}

const body = document.getElementsByTagName("body")
const children = body[0].children
for (let child of children) {
    child.style.backgroundColor = "black";
    child.style.color = "white";
}