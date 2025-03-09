const fruits = [{name:"apple", color:"red", calories:95},
                {name:"orange", color:"orange",calories:45},
                {name:"banana", color:"yellow",calories:105},
                {name:"coconut", color:"white",calories:159},
                {name:"pineapple", color:"yellow",calories:37},
                {name:"pineappleTest", color:"yellow",calories:37}]

console.log(fruits[0].name)

fruits.push({name: 'grapes', color: "purple", calories: 85})

for (let iterator of fruits) {
    console.log(iterator.name)
}


fruits.forEach(fruit=>console.log(fruit.calories))


const fruitNames = fruits.map(fruit => fruit.name)

console.log(fruitNames)

fruitNames2 = fruitNames.filter(fruit => {
    if (fruit.charAt(0) === "a"){
        return fruit
    }
})

console.log(fruitNames2)


const maxFruit = fruits.reduce((prev, current) => 
                current.calories > prev.calories ? current :  prev)

console.log(maxFruit.name)

const minFruit = fruits.reduce((prev, curr) => curr.calories > prev.calories ? prev : curr)

console.log(minFruit.name)