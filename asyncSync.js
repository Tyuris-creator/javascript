// synchronous = executes line by line consecutively in a 
// sequential manner code that waits for operation to complete

// asynchronous = allows multiply operations to be perfomed concurrently 
// without waiting . Doesnt block the execution flow and allows the program to continue
// (i/o operations, network, requests, fetching data)
// handled with: callbacks, promises, async/await




function func1(callback){
    setTimeout(() => {console.log("task1"); callback()}, 3000)
}

function func2() {
    console.log("task2")
    console.log("task3")
    console.log("task4")
}

func1(func2)

