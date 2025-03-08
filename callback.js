// callback a function that is passed as an argument
// to another function

// used to handle asynchronous operations
// 1) reading a file
// 2) network requests
// 3) interacting with databases

// hey when you are done, call this next

hello();
goodbye(); // here first will be completed goodbye() function

function hello() {
    setTimeout(() => {
        console.log("Hello!");
    }, 3000); 
}

function goodbye() {
    console.log("Goodbye!");
}