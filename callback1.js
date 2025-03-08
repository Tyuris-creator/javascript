hello(wait);

function hello(callback) {
    console.log("Hello!");
    callback()
}


function wait() {
    console.log("Wait!")
}


function leave() {
    console.log("Leave!");
}


function goodbye() {
    console.log("Goodbye!")
}