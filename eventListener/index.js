// evenListener = listen for specific events to create inteactive
// web pages events: click, mouseover, mouseot
// .addEventListener(event, callbak)

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function(event){
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch! 😟"
})


myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Mrrr ☺️"
})

myBtn.addEventListener("mouseout", event=> {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Don't leave! 🥺"
})

