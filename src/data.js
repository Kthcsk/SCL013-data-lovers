export const filterByType = (pokeDatos, type) => {
  const newDataArray = []; //declara variable con array
  for (let i = 0; i < pokeDatos.length; i += 1) { //loop que va recorriendo la data
    newDataArray.push(pokeDatos[i]);
    
  }
  return newDataArray.filter(pokemon => pokemon.type.includes(type))
};