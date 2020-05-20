import pokeData from './data/pokemon/pokemon.js';
import {} from './data.js';

//variables
const pokeDatos = pokeData.pokemon;
let arrData = Object.values(pokeDatos)
const pokemonesObj = document.getElementById('containerPokemon');
const pokemonesObj2 = document.getElementById('tableOne');

// document.getElementById("containerPoke").style.visibility = "hidden";

//función tarjeta
function printCard(index, documentName) {
  for (let i = 0; i < index; i++) {
    documentName.innerHTML +=
      '<div class=\'cardP\'> <a href="#containerPoke"> <h3 class=\'pokeNumber\'>' +
      arrData[i].num + '</h3> <img src=\'' +
      arrData[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
      arrData[i].name + '</h4> </a> </div>';
  }
}

//Ver los Pokemones
// Objet.values devuelve un arreglo con los objetos pokemon (cada pokemon)
printCard(arrData.length, pokemonesObj);

//Top 10
//Falta que filtre

let arrDataRank = Object.values(pokeDatos)
const menuRank = document.querySelector('#selectorType2');
menuRank.addEventListener('change', (event) => {
  pokemonesObj2.innerHTML = '';
  if (event.target.value === '0') {
    let pokeRank = arrDataRank.sort((a, b) => (a.id < b.id) ? -1 : 1);
    for (let i = 0; i <= 9; i++) {
      pokemonesObj2.innerHTML +=
        '<div class=\'root\'> <h3 class=\'pokeNumber2\'>' +
        pokeRank[i].num + '</h3> <h4 class=\'pokeName2\'>' +
        pokeRank[i].name + '</h4> <img src=\'' +
        pokeRank[i].img + '\' class=\'pokeImg2\'> </div>';
    }
  } else if (event.target.value === '1') {
    let pokeRank = arrDataRank.sort((a, b) => (a.spawn_chance > b.spawn_chance) ? -1 : 1);
    for (let i = 0; i <= 9; i++) {
      pokemonesObj2.innerHTML +=
        '<div class=\'root\'> <h3 class=\'pokeNumber2\'>' +
        pokeRank[i].num + '</h3> <h4 class=\'pokeName2\'>' +
        pokeRank[i].name + '</h4> <img src=\'' +
        pokeRank[i].img + '\' class=\'pokeImg2\'> </div>';
    }
  } else if (event.target.value === '2') {
    let pokeRank = arrDataRank.sort((a, b) => (a.egg > b.egg) ? -1 : 1);
    for (let i = 0; i <= 9; i++) {
      pokemonesObj2.innerHTML +=
      '<div class=\'root\'> <h3 class=\'pokeNumber2\'>' +
        pokeRank[i].num + '</h3> <h4 class=\'pokeName2\'>' +
        pokeRank[i].name + '</h4> <img src=\'' +
        pokeRank[i].img + '\' class=\'pokeImg2\'> </div>';
    }
  }
});

//Filtrar Pokemon
const menu = document.querySelector('.selectorType');
menu.addEventListener('change', (event) => {
  pokemonesObj.innerHTML = '';
  if (event.target.value == 0) {
    printCard(arrData.length, pokemonesObj);
  } else {
    for (let i = 0; i < arrData.length; i++) {
      for (let j = 0; j < arrData[i].type.length; j++) {
        if (event.target.value == arrData[i].type[j]) {
          pokemonesObj.innerHTML +=
            '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
            arrData[i].num + '</h3> <img src=\'' +
            arrData[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
            arrData[i].name + '</h4> </div>';
        }
      }
    }
  }
})

//Ordenar Pokemon
let arrDataOrder = Object.values(pokeDatos)
const menuOrder = document.querySelector('#selectorOrder');
menuOrder.addEventListener('change', (event) => {
  pokemonesObj.innerHTML = '';
  if (event.target.value == 0) {
    printCard(arrData.length, pokemonesObj);
  } else if (event.target.value == 1) { //ordenando de A - Z
    arrDataOrder.sort(function (a, b) {
      const nameA = a.name.toLocaleLowerCase(),
        nameB = b.name.toLocaleLowerCase();
      if (nameA < nameB)
        return -1;
      if (nameB < nameA)
        return 1;
      return 0;
    });
    for (let i = 0; i < arrDataOrder.length; i++) {
      pokemonesObj.innerHTML +=
        '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
        arrDataOrder[i].num + '</h3> <img src=\'' +
        arrDataOrder[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
        arrDataOrder[i].name + '</h4> </div>';
    }
  } else if (event.target.value == 2) { //ordenando de Z - A
    arrDataOrder.sort(function (a, b) {
      const nameA = a.name.toLocaleLowerCase(),
        nameB = b.name.toLocaleLowerCase();
      if (nameA < nameB)
        return 1;
      if (nameB < nameA)
        return -1;
      return 0;
    });
    for (let i = 0; i < arrDataOrder.length; i++) {
      pokemonesObj.innerHTML +=
        '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
        arrDataOrder[i].num + '</h3> <img src=\'' +
        arrDataOrder[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
        arrDataOrder[i].name + '</h4> </div>';
    }
  } else if (event.target.value == 3) { //ordenando de 1 - 151
    for (let i = 0; i < arrData.length; i++) {
      pokemonesObj.innerHTML +=
        '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
        arrData[i].num + '</h3> <img src=\'' +
        arrData[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
        arrData[i].name + '</h4> </div>';
    }
  } else if (event.target.value == 4) { //ordenando de 151 - 1
    arrDataOrder.sort(function (a, b) {
      return parseInt(b.num, 10) - parseInt(a.num, 10)
    });
    for (let i = 0; i < arrDataOrder.length; i++) {
      pokemonesObj.innerHTML +=
        '<div class=\'cardP\'> <h3 class=\'pokeNumber\'>' +
        arrDataOrder[i].num + '</h3> <img src=\'' +
        arrDataOrder[i].img + '\' class=\'pokeImg\'> <h4 class=\'pokeName\'>' +
        arrDataOrder[i].name + '</h4> </div>';
    }
  }
})

//Busqueda Pokemon
// A medida que uno vaya escribiendo vaya filtrando
// formulario.addEventListener('input', filtrar); (Esto sirve para el comentario de arriba)
