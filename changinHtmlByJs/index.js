// step 1 create h1 element
const newH1 = document.createElement("h1");
// add attributes
newH1.textContent = "I like pizza!"
newH1.id = "myH1"
newH1.style.color = "tomato"
newH1.style.textAlign = "center"
// append to dom
//document.body.append(newH1)
document.body.prepend(newH1)


document.getElementById("box3").append(newH1)
// append - last child prepend - first child

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2) // new el between box 1 box 2

const boxes = document.querySelectorAll(".box")

document.body.removeChild(newH1)