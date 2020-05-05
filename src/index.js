const API = 'https://pokeapi.co/api/v2/pokemon/'
const button = document.getElementById('button');
const img = document.getElementById('image-pokemon');
button.addEventListener("click", searchPokemon);


function renderPokemon(imagen) {
    img.setAttribute('src', imagen)
}




async function searchPokemon() {
    const input = document.getElementById('input')
    const pkId = input.value
    if(pkId){
        const url = `${API}${pkId}`
        const response = await fetch(url)
        const data = await response.json()
        const pokemon = renderPokemon(data.sprites.front_default)
        return pokemon
    }
}

searchPokemon();