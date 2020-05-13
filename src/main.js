import pokeData from './data/pokemon/pokemon.js';
import {} from './data.js';


//Ver los Pokemones
// Objet.values Devuelve un array con los valores correspondientes a las propiedades enumerables de la data
const pokeDatos = pokeData.pokemon;
let arrData = Object.values(pokeDatos)
const pokemonesObj = document.getElementById("containerPokemon");
for (let i = 0; i < arrData.length; i++) {
  pokemonesObj.innerHTML += `<div class="cardP">
    <h3 class="pokeNumber">${arrData[i].num}</h3>
    <img class="pokeImg" src="${arrData[i].img}">
    <h4 class="pokeName">${arrData[i].name}</h4>
  </div>`;
}


//Top 10
const pokeDatos2 = pokeData.pokemon;
let arrData2 = Object.values(pokeDatos2)
const pokemonesObj2 = document.getElementById("tableOne");
for (let i = 0; i <=9; i++) {
   pokemonesObj2.innerHTML += `<div class="root">
     <h3 class="pokeNumber2">${arrData2[i].num}</h3>
     <h4 class="pokeName2">${arrData2[i].name}</h4>
      <img class="pokeImg2" src="${arrData2[i].img}">
    </div>`;
}
