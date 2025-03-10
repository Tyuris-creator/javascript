// error = an object that is created to represent a problem that occurs
// occur often with user input 

// try { } = enclosses code that might potentially cause error
// catch { } = catch and handle any thrown errors from try { }
// finally { } = (optional) always executes. used mostly for clean up
// ex close files, close connections, release resources


try {
    console,log(x)
}
catch(error){
    console.error(error)
}

console.log("You have reached the end!")


try {
    const divident = window.prompt("Enter a divident: ");
    const divisor = window.prompt("Enter a divisor")
    if(divisor === 0){
        throw new Error("You can't divide by zero!");
    }

    const result = divident / divisor;
    console.log(result)
}
catch(error){
    console.log(result);
}
console.log("Goodbye!")