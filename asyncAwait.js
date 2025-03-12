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
            const takenOutTrash = true
            if(takenOutTrash){resolve("You take out the trash!")}
            else{reject("You did not take the trash!")}
        }, 500)
    })
}

// async/await = async = makes a function return a promise 
// await = makes an async function wait for a promise
// allows you write assynchronous code in a synchronous manner
// async doesn't have resolve or reject parameters 
// everything after awai is placed in even queue

async function doChores() {

    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult)
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult)
    
        const takenOutTrashResult = await takeOutTrash()
        console.log(takenOutTrashResult)
    
        console.log("Done! Go sleep!")
    }
    catch(error){
        console.error(error)
    }
    }

doChores()