import pokeData from './data/pokemon/pokemon.js';

export const sortedPokemons = (data, sortBy, condition) => {
  if (condition === "za") {
    return data.sort((a, b)=> (a[sortBy] > b[sortBy]) ? -1 : 1);
  } else if (condition === "ranking"){
    return data.sort((a, b)=> (a[sortBy] > b[sortBy]) ? -1 : 1);
  }
  else {
    return data.sort((a, b)=> (a[sortBy] < b[sortBy]) ? -1 : 1);
  }
}
