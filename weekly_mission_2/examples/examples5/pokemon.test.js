import Pokemon from './pokemon.js'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachus', "Fuego", 9)
  expect(myPokemon.name).toBe('Pikachus'); // Corrige esta prueba
});
