

function convertPokemon(pokemon) {
return `<li class="pokemon ${pokemon.type}">
<span class="number">#00${pokemon.number}</span>
<span class="name">${pokemon.name}</span>

<div class="detail">
    <ol class="types ${pokemon.type}">
       ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}

    </ol>
<img src="${pokemon.photo}"${pokemon.name}">
</div>
</li>`
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
pokemonList.innerHTML = pokemons.map(convertPokemon).join('')
   })
