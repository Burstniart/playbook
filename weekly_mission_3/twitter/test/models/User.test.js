const User = require('./../../app/models/User')
describe('Unit Test for Twitter', () => {
    test('1) Model for User', () => {
        const myUser = new User(1,'Princess_Peach','Monika',"She's a queen, beach!")

        expect(myUser.id).toBe(1);
        expect(myUser.username).toBe('Princess_Peach');
        expect(myUser.name).toBe('Monika');
        expect(myUser.bio).toBe("She's a queen, beach!");
        expect(myUser.dateCreated).not.toBeUndefined();
        expect(myUser.lastUpdated).not.toBeUndefined();
    });
    test('2) Getters for User', () => {
        const user = new User(2, 'Princess_Peach', 'Monika', "She's a queen, beach!")

        expect(user.getUsername).toBe('Princess_Peach');
        expect(user.getBio).toBe("She's a queen, beach!");
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    });
    test('3) Setters for User', () => {
        const user = new User(2, 'Princess_Peach', 'Monika', "She's a queen, beach!");
        user.setUsername = 'Toadette'
        expect(user.username).toBe('Toadette');

        user.setBio = 'New Bio'
        expect(user.bio).toBe('New Bio')
    });
})


