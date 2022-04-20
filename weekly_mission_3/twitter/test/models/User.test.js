const User = require('./../../app/models/User')
describe('Unit Test for Twitter', () => {
    test('1) Model for User', () => {
        const myUser = new User(1,'Princess Peach','Monika',"She's a queen, beach!", 'dateCreated', 'lastUpdated')

        expect(myUser.id).toBe(1);
        expect(myUser.username).toBe('Princess Peach');
        expect(myUser.name).toBe('Monika');
        expect(myUser.bio).toBe("She's a queen, beach!");
        expect(myUser.dateCreated).toBe('dateCreated');
        expect(myUser.lastUpdated).toBe('lastUpdated');
    });
})


