// for (key in Object) {}
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}


Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})

Object.values(myObject).forEach(value => {
    console.log(value)
})


const myArray = [true, 10, 'abc', null]
for (const index of myArray) {
    console.log(index)
}
