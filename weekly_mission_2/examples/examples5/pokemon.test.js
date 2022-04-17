import Pokemon from './pokemon.js'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Charmander', "Fuego", 10)
  expect(myPokemon.name).toBe('Charmander'); // Corrige esta prueba
});
