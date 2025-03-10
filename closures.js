//closure -  a function defined of another function
// the inner function has access to the variables and scope of the outer 
// functions
// allow for private variables and state maintenance
// used frequently in js frameworks react vue angular

function outer() {
    let message = 'hello';
    function inner() {
        console.log(message)
    }
    inner()
}

outer()


function createCounter() {
    let count = 0;
    let globalolo = 123
    function increment(){
        count++;
        console.log(`count increased to ${count}`);
        function decreament(){
            globalolo--;
            console.log(globalolo)
        }
        decreament()
    }

    function getCount(){
        return count;
    }
    return {increment, getCount}
}

const counter = createCounter();
counter.increment()
counter.increment()
counter.increment()
counter.increment()

console.log(counter.getCount())

function createGame() {

let score = 0;
function increaseScore(points){
    score+=points;
    console.log(`+${points}pts`)
}

function decreaseScore(points){
    score-=points;
    console.log(`-${points}pts`)
}

function getScore(){
    console.log(score)
}

return{increaseScore,decreaseScore,getScore}

}



const game = createGame();
game.increaseScore(100)
game.decreaseScore(50)
game.getScore()


