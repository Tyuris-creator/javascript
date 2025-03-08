// map() = accepts a callback and applies that function
// to each element of an array, then return a new array

const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);
const squares2 = numbers.map((el) => cube(el))

console.log(squares)
console.log(cubes)
console.log(squares2)
function square(element) {
    return Math.pow(element, 2)
}

function cube(element) {
    return Math.pow(element, 3)
}


const names = ['misha', 'marsel', 'marat', 'alexander', 'rinat']

const namesCap = names.map((el, index, array) => {
    array[index] = el.charAt(0).toUpperCase() + el.slice(1);
    return array[index]
})

console.log(namesCap);

const dates = ['2024-1-10', '2025-2-20', '2026-3-30']
const formattedDates = dates.map(formatDates)
console.log(formattedDates)

function formatDates(element){
    const parts = element.split('-');
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}