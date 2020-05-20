import { filterByType } from '../src/data.js';
const data = 
  [{
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "Grass", 
      "Poison"
    ],
    "height": "0.71 m",
    "weight": "6.9 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.69,
    "avg_spawns": 69,
    "spawn_time": "20:00",
    "multipliers": [1.58],
    "weather": [
      "Sunny ",
      "Cloudy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "next_evolution": [{
      "num": "002",
      "name": "Ivysaur"
    }, {
      "num": "003",
      "name": "Venusaur"
    }]
  }
  ]
  
  describe('example', () => {
  test('should be a type', () => {
    expect(typeof filterByType).toBe('function');
  });

//  const result = [
//     {
//       "num": "001",
//       "name": "Bulbasaur",
//       "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
//       "type": [
//         "Grass", 
//         "Poison"
//       ],
//       "height": "0.71 m",
//       "weight": "6.9 kg",
//       "candy_count": 25,
//       "weaknesses": [
//         "Fire",
//         "Ice",
//         "Flying",
//         "Psychic"
//       ]
//     }
//   ]

  describe('data', () => {
    test('should be a type', () => {
      expect(typeof filterByType).toBe('function');
    });
  
    test('returns `Al filtrar por grass, filtra bulbasaur`', () => {
      expect(filterByType(data, "Grass")).toEqual(data);//dentro del ToBe va lo que voy a comparar
    });
  });




//   test('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
});
