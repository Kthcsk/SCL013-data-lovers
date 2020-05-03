//Tenemos que comunicar la función que creamos en el archivo main,con la función que crearemos en este archivo Data
//Creamos una función que va a recibir lo que viene del main.js
//Desde Main se llama a la función y se entrega los 2 parámetros
//La condición es lo que el usuario selecciona en el HTML
//ACA SE DEBE PONER LA FUNCIÓN PARA FILTRAR
export const filterData = (data, condition) => {
//console.log(data);
//console.log(condition);
//Le vamos a pedir que recorra la Data, la data es un ARRAY que contiene Objetos, para eso utilizamos: For hasta el largo de la data y uno por

let names = [];
for (let i = 0; i < data.length; i++) {
  names.push(data[i].name)
  }

return names;
//console.log(names)
  //console.log(data[i].name) //Nos muestra cada objeto que está en las distintas posiciones del arreglo. Quiero pedirle que solo me muestre los nombres con .name
 //Como tenemos esto, ahora lo mandamos al Dom(main), para que haga la estructura y se lo pase al HTML
//Para lo anterior guardamos la información en una variable, creamos una nueva variable(arriba de for)
 
}
