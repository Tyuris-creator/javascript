async function fetchData() {
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        console.log(response)
        if (!response.ok){
            throw new Error("Could not fetch resource!")
        }
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default;
        const pokemonSpriteImage = document.getElementById("pokemonSprite");

        pokemonSpriteImage.src = pokemonSprite;
        pokemonSpriteImage.style.display = "block";
    }
    catch(error){
        console.log(error)
    }
}

fetchData()