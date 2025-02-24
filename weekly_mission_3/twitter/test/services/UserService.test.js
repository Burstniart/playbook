const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, 'Princess_Peach', 'Monika')

        expect(user.username).toBe('Princess_Peach')
        expect(user.name).toBe('Monika')
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
    test('2. Get all user data in a list', () => {
        const user = UserService.create(1, 'Princess_Peach', 'Monika')
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe('Princess_Peach')
        expect(userInfoInList[2]).toBe('Monika')
        expect(userInfoInList[3]).toBe('No bio')
    });
    test("3. Update username", () => {
        const user = UserService.create(1, 'Princess_Peach','Monika')
        UserService.updateUsername(user, 'PrncssPeach')

        expect(user.username).toBe('PrncssPeach')
    });
    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, 'Princess1', 'Monika')
        const user2 = UserService.create(1, 'Princess2', 'Monika')
        const user3 = UserService.create(1, 'Princess3', 'Monika')
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain('Princess1')
        expect(usernames).toContain('Princess2')
        expect(usernames).toContain('Princess3')
    });
})

