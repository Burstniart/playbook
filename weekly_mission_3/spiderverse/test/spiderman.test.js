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
})