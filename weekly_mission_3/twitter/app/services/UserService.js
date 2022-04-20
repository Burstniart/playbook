const User = require('./../models/User')
class UserService {
    static create(id, username, name) {
        return new User(id, username, name, 'No bio')
    }
    static getInfo(User) {
        // returns an array of a given object's own enumerable property values
        return Object.values(User)
    }
}
module.exports = UserService
