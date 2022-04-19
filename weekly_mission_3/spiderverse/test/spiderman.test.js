const Spiderman = require('./../app/spiderman')
describe('Unit Test for Spiderman CLass', () => {
    test('1) Create a spiderman object', () => {
        // I write code here
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, 'Andrew Garfield', 2, 'Sony')

        // I write what the outcome should be
        expect(andrewGarfield.name).toBe("Spiderman Sony");
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe("Andrew Garfield");
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe("Sony");

    });
    test('2) Use tge method getInfo()', () => {
        // I write here code for it to work
        const tomHolland = new Spiderman('Spiderman Marvel', 25, 'Tom Holland', 6, 'Marvel')
// Queremos usar un método que nos regrese la siguiente información: nombre y estudio al que pertenece el spiderman instanciado.
// Ejemplo:
        // I expect this to work
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
// tomHolland.getInfo() // esto necesita regresar: "Hey, I'm Tom Holland from Marvel studio"

    });
})