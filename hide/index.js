const myBtn = document.getElementById("myBtn")
const myImg = document.getElementById("myImg")

myBtn.addEventListener("click", event => {

    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible"
        myBtn.textContent = "Hide"
    }
    else {
        myImg.style.visibility = "hidden"
        myBtn.textContent = "Show"
    }
});

