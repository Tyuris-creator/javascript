//Глобальные области видимости global window
// Локальные области видимости

let a = 12323
let b = false
// global 

function myFn() {
    let b
    let a
    a = true
    b = 10
    console.log(b) // local visibility 
}

myFn()

console.log(a)
console.log(b)


