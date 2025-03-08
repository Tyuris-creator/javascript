const food1 = 'pizza'
const food2 = 'hamburger'
const food3 = 'hotdog'
const food4 = 'sushi'
const food5 = 'kebab'

function openFridge(...foods) {
    console.log(...foods);
}

openFridge(food1, food2, food3, food4, food5)


function combStr(...strings) {
    console.log(strings.join('-'))
}

combStr('Mr.', 'Michail', 'Etc', 'Etc')