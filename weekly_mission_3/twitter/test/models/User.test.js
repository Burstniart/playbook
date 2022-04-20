// Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: 
// `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 

describe('Unit Test for Twitter', () => {
    test('1) Model for User', () => {
        const myUser = new User('Monika')

        expect(myUser.name).toBe('Monika');
    });
})


