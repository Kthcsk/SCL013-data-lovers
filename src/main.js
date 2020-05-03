//Aqui utilizamos todo lo que es manipulación del DOM.
import data from './data/pokemon/pokemon.js';
import { filterData } from './../src/data.js';


//Creamos una variable para guadar los tipos de Pokemon
const selector = document.getElementById('selectorType');
const container = document.getElementById('root');

// Creamos un evento para sobre la cual se ejecutará la variable anterior. AddEventlistener esta compuesto de 2 cosas 
// (el evento, el nombre de la función a la cual le daremos ese evento) o podemos dejar la función anónima y poner todo dentro del evento.
// Con la variable let condition; guardamos una y otra vez el valor que el usuario seleccione de este select
// Esto es importante para decirle a la Data, muestrame solo los Pokemon de algún tipo (TENEMOS  QUE HACERLO)

selector.addEventListener('change', () => {
    let condition = selector.options[selector.selectedIndex].text; 
    //console.log(condition)
    let result = filterData(data, condition);
   // console.log(result)
    for(let i= 0; i < result.length; i++){
      //Aqui armamos la estructura del HTML,Con el InerHTML le inyecto cosas a una estructura HTML
      //container.innerHTML += '<p>'+ result[i] +'</p>';
      container.innerHTML += `<p>${result[i]}</p>`
    }
    

})
//creo una variable que se va a llamar pokeDat y dentro guardará data.pokemon que es lo que estoy importando
let pokeDat = data.pokemon;
//Ahora pido un console.log de la variable pokeDat que acabo de crear y es esta variable con la cual yo trabajo, con 
//La variable porque aquí esta guardado todo el arreglo de objetos
//CON LA DATA DE POKEMOM VAMOS A HACER 1 PASO MAS PORQUE NO VIENE LISTO EL ARREGLO, TENEMOS QUE HACER EL ARREGLO PARA CREAR UNA VARIABLE Y GUARDAR ESE OBJETO.
console.log(pokeDat)

// Hay una propiedad en Js que se llama Objet y es para transformar un valor de un objeto en arreglos
//console.log(Object.values(lolData))


// **si en result no se Hubiera guardado un arreglo con nombres, sino un arreglo de objetos, como le pido que me muestre un nombre
//  container.innerHTML += `<p>${result[i].name}</p>`


//Si queremos importar toda la data y no condición por condición, se pone al final del archivo con un export (estilo objeto)
//Y se exporta todas las funciones (Buscar en google)


//let dataArray = object.values(data.data);
//console.log(dataArray)

//const input = document.getElementById('input-name');
//const btnName = document.getElementById('btn-name');
//const container =document.getElementById('root');
//btnName.addEventListener('click', () => {
  //let name = inputName.value;
   //let resultConfirmName = confirmName(dataArray, name);})
   