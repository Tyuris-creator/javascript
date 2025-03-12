// promise = an object that manages asyc operations
// wrap a promise object around (asynchronous code)
// i promise to return a value
// -pending- resolving - rejectin

function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogWalked = true;
            if (dogWalked){resolve("You walk the dog!")}
            else {reject("You did not walk the dog!")}
        }, 1500)
    })
}

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kitchenCleaned = true;
            if(kitchenCleaned){resolve("You clean the kitchen!")}
            else{reject("You did not clean kitchen!")}
        }, 2500);
    })
}

function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const takenOutTrash = false
            if(takenOutTrash){resolve("You take out the trash!")}
            else{reject("You did not take the trash!")}
        }, 500)
    })
}

// i wanna do this in order (i can use the callback put is as a parameter) but also promises we needa return new Promise that has two states resolved reject
/*
walkDog(()=>{
    cleanKitchen(()=>{
        takeOutTrash(()=> console.log("You finished all the chores!"))
    })
})
*/
/*
walkDog().then(value => console.log(value));
cleanKitchen().then(value => console.log(value));
takeOutTrash().then(value => console.log(value));
*/

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => (console.log(value)))
         .catch(error => console.error(error));
         