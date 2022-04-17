import Pokemon from './pokemon.js'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Charmander', "Fuego", 9)
  expect(myPokemon.name).toBe('Charmander'); // Corrige esta prueba
});
