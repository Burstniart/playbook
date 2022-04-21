const UserView = require('./../../app/views/UserView')

describe('Test for UserView', () => {
    test('1) Return an error object when trying to create a new user with an null payload', () => {
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/payload no existe/)
    });
})