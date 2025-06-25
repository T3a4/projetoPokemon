const pokemonImg = document.getElementById("pokemon-img");
const pokemonName = document.getElementById("pokemon-name");
const pokemonType = document.getElementById("pokemon-type");
const attacksList = document.getElementById("attacks-list");
const pokemonCard = document.getElementById("pokemon-card");

const pokemons = {
    pikachu: {
        nome: "Pikachu",
        tipo: "Elétrico",
        imagem: "images/pikachu.png",
        ataques: ["Choque do Trovão", "Ataque Rápido", "Investida Elétrica"],
        classe: "eletrico"
    },
    charmander: {
        nome: "Charmander",
        tipo: "Fogo",
        imagem: "images/charmander.png",
        ataques: ["Lança-chamas", "Garra de Fogo", "Investida"],
        classe: "fogo"
    },
    squirtle: {
        nome: "Squirtle",
        tipo: "Água",
        imagem: "images/squirtle.png",
        ataques: ["Jato d'Água", "Bolhas", "Cauda de Água"],
        classe: "agua"
    }
};

function atualizarCard(pokemon) {
    // Atualiza imagem, nome e tipo
    pokemonImg.src = pokemon.imagem;
    pokemonImg.alt = pokemon.nome;
    pokemonName.innerText = pokemon.nome;
    pokemonType.innerText = `Tipo: ${pokemon.tipo}`;

    pokemonCard.className = `pokemon-card ${pokemon.classe}`;

    attacksList.innerHTML = ""; // limpa a lista
    pokemon.ataques.forEach(ataque => {
        const li = document.createElement("li");
        li.innerText = ataque;
        attacksList.appendChild(li);
    });
}

document.getElementById("btn-pokemon-1").addEventListener("click", () => atualizarCard(pokemons.pikachu));
document.getElementById("btn-pokemon-2").addEventListener("click", () => atualizarCard(pokemons.charmander));
document.getElementById("btn-pokemon-3").addEventListener("click", () => atualizarCard(pokemons.squirtle));