const UserView = require('./../../app/views/UserView')

describe('Test for UserView', () => {
    test('1) Return an error object when trying to create a new user with an null payload', () => {
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/payload no existe/)
    });
    test ('2) Return an error object when trying to create a new user with payload with invalid properties', () => {
        const payload = {username: null, name: 12, id: 'id'}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/must have valid values/)
    });
})