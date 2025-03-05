// for (начальная инструкция; условие; итерационное действие) 
// {
// блок кода 
//}

let i = 1

for (i; i <= 5; i++) {
    console.log(i)
}

// не рекомендуется для массивов лучше forEach map reduce

const myArray = ['first', 'second', 'third']

for (let i = 0, len = myArray.length; i < len; i++ ) {
    console.log(myArray[i])
}

const myArray2 = ['first', 'second', 'third']

myArray.forEach((element, index) => {
    console.log(element, index)
})

