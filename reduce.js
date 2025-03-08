// reduce() reduce the elements of an array
// to a single value


const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

const total2 = prices.reduce((prev, current)=> prev += current) 

console.log(total)
console.log(total2)

function sum(previous, next) {
    return previous + next
}


const points = [75,65,73,12,234,12,543]

const maxPoints = points.reduce((prev,current) => Math.max(prev,current))
console.log(maxPoints)
const minPoints = points.reduce((prev,current)=>Math.min(prev,current))
console.log(minPoints)