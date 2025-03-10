


let timeOutId = function(){
    setTimeout(()=> window.alert("Hello"), 3000)
    console.log("Starter")
};

function clearTimer(){
    clearTimeout(timeOutId)
    console.log("cleared")
}