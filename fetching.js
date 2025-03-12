/*
fetch("people.json")
    .then(response=>response.json())
    .then(value=> console.log(value))
    .catch(error=>console.error(error))
*/

//fetch = Function used for making HTTP requests to fetch 
//resources (JSON style data, images, files)

// SIMPLIFIES asenchronous data fetching in JavaScript and used
// for interacting with APIs to retrieve and send
// data asynchronously over the web
// fetch(url,{options})

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {if(!response.ok){
        throw new Error("Could not fetch resources")
    }
        return response.json();
})
    .then(data => console.log(data.weight))
    .catch(error => console.error(error));


async function fetchData() {
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        console.log(response)
        if (response.ok){
            const data = await response.json()
            console.log(data.weight)
        }
        else{throw new Error("Could not fetch resource!")}
    }
    catch(error){
        console.log(error)
    }
}

fetchData()