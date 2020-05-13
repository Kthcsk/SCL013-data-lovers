// EN ESTA SECCIÓN VARIABLES PARA MANIPULAR EL DOM
// DENTRO DE LAS LLAVES DE CADA FUNCIÓN ESCRIBO LAS FUNCIONES QUE DECLARO EN EL DATA.

import pokeData from './data/pokemon/pokemon.js';

import { filterData } from './data.js';

//MOSTRAR A POKEMONES EN POKEDEX. 
//Método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
const pokeDatos = pokeData.pokemon;
let arrData = Object.values(pokeDatos)
const pokemonesObj = document.getElementById("containerPokemon");
for (let i = 0; i < arrData.length; i++) {
  pokemonesObj.innerHTML += `<div class="cardP">
    <h3 class="pokeNumber">${arrData[i].num}</h3>
    <img src="${arrData[i].img}" alt="" class="pokeImg">
    <h4 class="pokeName">${arrData[i].name}</h4>
  </div>`;
  // createModal();
}


//RANKING-TOP 10
const pokeDatos2 = pokeData.pokemon;
let arrData2 = Object.values(pokeDatos2)
const pokemonesObj2 = document.getElementById("tableOne");  
for (let i = 0; i <9; arrData.length; i++) {
  pokemonesObj2.innerHTML += `<div class="cardP">
    <h3 class="pokeNumber">${arrData2[i].num}</h3>
    <img src="${arrData2[i].img}" alt="" class="pokeImg2">
    <h4 class="pokeName">${arrData2[i].name}</h4>
  </div>`;

//ORDENAR A LOS POKEMONES DESDE LA A-Z

const selectOrder = document.getElementById("filterOrder");
selectOrder.addEventListener("change", ()=>{
  let selectedOrder = filterData(selectOrder);

  document.getElementById("containerPokemon").innerHTML="";
})










/*
//seleccionar ordenar por tipo
const selectType = document.getElementById("type");
selectType.addEventListener("change", ()=>{
  let pokeTypes = filterType(selectType.value);

  document.getElementById("pokedex").innerHTML=""; //las comillas borran la información

  for (let i = 0; i < pokeTypes.length; i++) {
      let pokeCards = document.createElement("div");
      pokeCards.className = "pokeCards";
      pokeCards.id = "pokeCards";

      //variable para crear nombre pokemon
      let pokeName = document.createElement("h3");
      pokeName.textContent = pokeTypes[i].name;

      //variable para craer imagen pokemon
      let image = document.createElement("img");
      image.src = pokeTypes[i].img;

      //variable número pokemon
      let pokeNumber = document.createElement("h4");
      pokeNumber.textContent = "#" + pokeTypes[i].num;
      pokeNumber.className = "number";

      //Creando tipo de pokemon primer tipo
      let pokeType = document.createElement("p");
      pokeType.textContent = pokeTypes[i].type[0]; //tipo 0
      pokeType.className = "info";

      //Creando tipo de pokemon segundo tipo
      let pokeType2 = document.createElement("p");
      pokeType2.className = "info";
      pokeType2.textContent = pokeTypes[i].type[1];

      //Dando valor a variables
      pokeCards.appendChild(pokeName);
      pokeCards.appendChild(image);
      pokeCards.appendChild(pokeNumber);
      pokeCards.appendChild(pokeType);
      pokeCards.appendChild(pokeType2);

      //Mostrar tarjeta en HTLM section
      document.getElementById("pokedex").appendChild(pokeCards).innerHTML;
  }
})


//seleccionar ordenar por huevos
const selectEggs = document.getElementById("eggkm");
selectEggs.addEventListener("change", ()=>{
  let pokeTypes = filterEggs(selectEggs.value);

  document.getElementById("pokedex").innerHTML=""; //las comillas limpian la información, para que no sume

  for (let i = 0; i < pokeTypes.length; i++) {
      let pokeCards = document.createElement("div");
      pokeCards.className = "pokeCards";
      pokeCards.id = "pokeCards";

      //variable para crear nombre pokemon
      let pokeName = document.createElement("h3");
      pokeName.textContent = pokeTypes[i].name;

      //variable para craer imagen pokemon
      let image = document.createElement("img");
      image.src = pokeTypes[i].img;

      //variable número pokemon
      let pokeNumber = document.createElement("h4");
      pokeNumber.textContent = "#" + pokeTypes[i].num;
      pokeNumber.className = "number";

      //Creando tipo de pokemon primer tipo
      let pokeType = document.createElement("p");
      pokeType.textContent = pokeTypes[i].type[0]; //tipo 0
      pokeType.className = "info";

      //Creando tipo de pokemon segundo tipo
      let pokeType2 = document.createElement("p");
      pokeType2.className = "info";
      pokeType2.textContent = pokeTypes[i].type[1];

      //Dando valor a variables
      pokeCards.appendChild(pokeName);
      pokeCards.appendChild(image);
      pokeCards.appendChild(pokeNumber);
      pokeCards.appendChild(pokeType);
      pokeCards.appendChild(pokeType2);

      //Mostrar tarjeta en HTLM section
      document.getElementById("pokedex").appendChild(pokeCards).innerHTML;
  }
})
 */

    
    
    
    
    
    
    
    
    
    
    
    /*Mostrar Mas Detalles de la Carta
    const pokeCard = document.querySelector(".viewCard");
    console.log(pokeCard);
    pokeCard.addEventListener("click", function(e) {
      const numId = document.getElementById("pokemon");
      //console.log(numId);
      const numPokemon = numId;
      //console.log(numPokemon);
      let chosenPoke = cardPoke(allData,numPokemon);
      //console.log(chosenPoke);
      viewAllPokemon(chosenPoke);
    });
    */
    
    
    /*
    document.querySelectorAll('.elementCard').forEach(function(el){
      el.addEventListener('click', function() {
        const numPokemon = this.id;
        let chosenPoke = cardPoke(allData,numPokemon);
        console.log(chosenPoke);
        //viewAllPokemon(chosenPoke);
      });
    });
    
    */
    
    /* let on= (dataSet)=>{
      document.getElementById("overlay").style.display = "block";
      const ovCard = document.getElementById("overlayCard");
      let cardTemplate = "";
      cardTemplate += `
      <section class="tarjetaPrincipal">
      <div class="contenedor">
      <section class="izquierda">
      <div class="caracteristicaPrincipal">
      <p>${dataSet[0].num}</p>
      <p>${dataSet[0].name}</p>
      <img src="${dataSet[0].img}">
      <p>Tipo: ${dataSet[0].type.join(" - ")}</p>
      </div>
      
      </section>
      
      <section class="derecha">
      <div class="caracteristicasSecundarias">
      <p>Altura: ${dataSet[0].height}</p>
      <p>Peso: ${dataSet[0].weight}</p>
      <p>Caramelos: ${dataSet[0].candy} </p>
      <p>Cantidad Caramelos:${dataSet[0].candy_count} </p>
      </div>
      <div class="debilidades">
      <p>Debilidad: ${dataSet[0].weaknesses.join(" - ")}</p>
      </div>
      </section>
      </div>
      <section class="fondo">
      <div class="subFondo">
      <img src="http://www.serebii.net/pokemongo/pokemon/002.png">
      <img src="http://www.serebii.net/pokemongo/pokemon/003.png">
      </div>
      
      </section>
      </section>`;
      
      ovCard.innerHTML = cardTemplate;
      console.log(ovCard);
    }
    document.getElementById("pokemon1").addEventListener("click", on(allData));
    function off() {
      document.getElementById("overlay").style.display = "none";
    }
    document.getElementById("overlay").addEventListener("click", off); */
  // © 2020 GitHub, Inc.
  // Terms
  // Privacy
  // Security
  // Status
  // Help
  // Contact GitHub
  // Pricing
  // API
  // Training
  // Blog
  // About
  




// //Ver los Pokemones
// const pokeDatos = pokeData.pokemon;
// let arrData = Object.values(pokeDatos)
// const containerPokemon = document.getElementById("containerPokemon");
// for (let i = 0; i < arrData.length; i++) {
//   containerPokemon.innerHTML += `<div class="cardP">
//     <h3 class="pokeNumber">${arrData[i].num}</h3>
//     <img src="${arrData[i].img}" alt="" class="pokeImg">
//     <h4 class="pokeName">${arrData[i].name}</h4>
//   </div>`;
//   // createModal();
// }

// //seleccionar ordenar por alfabeto o numero
// const select = document.getElementById("filterOrder");
// select.addEventListener("change", ()=>{
// containerPokemon.innerHTML= "";
// arrData=Object.values(pokeDatos);
// let condition= select.options[select.filterOrderIndex].text;
// let orderResult=orderData(arrData, condition);
// for(let i=0; i<orderResult.length;i++){
//   containerPokemon.innerHTML += `<div class="cardP">
//   <h3 class="pokeNumber">${orderResult[i].num}</h3>
//   <img src="${orderResult[i].img}" alt="" class="pokeImg">
//   <h4 class="pokeName">${orderResult[i].name}</h4>
// </div>`;
// // createModal();
// }
// })




/*
//seleccionar ordenar por tipo
const selectType = document.getElementById("type");
selectType.addEventListener("change", ()=>{
  let pokeTypes = filterType(selectType.value);

  document.getElementById("pokedex").innerHTML=""; //las comillas borran la información

  for (let i = 0; i < pokeTypes.length; i++) {
      let pokeCards = document.createElement("div");
      pokeCards.className = "pokeCards";
      pokeCards.id = "pokeCards";

      //variable para crear nombre pokemon
      let pokeName = document.createElement("h3");
      pokeName.textContent = pokeTypes[i].name;

      //variable para craer imagen pokemon
      let image = document.createElement("img");
      image.src = pokeTypes[i].img;

      //variable número pokemon
      let pokeNumber = document.createElement("h4");
      pokeNumber.textContent = "#" + pokeTypes[i].num;
      pokeNumber.className = "number";

      //Creando tipo de pokemon primer tipo
      let pokeType = document.createElement("p");
      pokeType.textContent = pokeTypes[i].type[0]; //tipo 0
      pokeType.className = "info";

      //Creando tipo de pokemon segundo tipo
      let pokeType2 = document.createElement("p");
      pokeType2.className = "info";
      pokeType2.textContent = pokeTypes[i].type[1];

      //Dando valor a variables
      pokeCards.appendChild(pokeName);
      pokeCards.appendChild(image);
      pokeCards.appendChild(pokeNumber);
      pokeCards.appendChild(pokeType);
      pokeCards.appendChild(pokeType2);

      //Mostrar tarjeta en HTLM section
      document.getElementById("pokedex").appendChild(pokeCards).innerHTML;
  }
})


//seleccionar ordenar por huevos
const selectEggs = document.getElementById("eggkm");
selectEggs.addEventListener("change", ()=>{
  let pokeTypes = filterEggs(selectEggs.value);

  document.getElementById("pokedex").innerHTML=""; //las comillas limpian la información, para que no sume

  for (let i = 0; i < pokeTypes.length; i++) {
      let pokeCards = document.createElement("div");
      pokeCards.className = "pokeCards";
      pokeCards.id = "pokeCards";

      //variable para crear nombre pokemon
      let pokeName = document.createElement("h3");
      pokeName.textContent = pokeTypes[i].name;

      //variable para craer imagen pokemon
      let image = document.createElement("img");
      image.src = pokeTypes[i].img;

      //variable número pokemon
      let pokeNumber = document.createElement("h4");
      pokeNumber.textContent = "#" + pokeTypes[i].num;
      pokeNumber.className = "number";

      //Creando tipo de pokemon primer tipo
      let pokeType = document.createElement("p");
      pokeType.textContent = pokeTypes[i].type[0]; //tipo 0
      pokeType.className = "info";

      //Creando tipo de pokemon segundo tipo
      let pokeType2 = document.createElement("p");
      pokeType2.className = "info";
      pokeType2.textContent = pokeTypes[i].type[1];

      //Dando valor a variables
      pokeCards.appendChild(pokeName);
      pokeCards.appendChild(image);
      pokeCards.appendChild(pokeNumber);
      pokeCards.appendChild(pokeType);
      pokeCards.appendChild(pokeType2);

      //Mostrar tarjeta en HTLM section
      document.getElementById("pokedex").appendChild(pokeCards).innerHTML;
  }
})
 */