const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, 'Princess_Peach', 'Monika')

        expect(user.username).toBe('Princess_Peach')
        expect(user.name).toBe('Monika')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
})

