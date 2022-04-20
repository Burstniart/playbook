const User = require('./../models/User')
class UserService {
    static create(id, username, name) {
        return new User(id, username, name, 'No bio')
    }
    static getInfo(User) {
        // returns an array of a given object's own enumerable property values
        return Object.values(User)
    }
    static updateUsername(user, newUserName) {
        user.username = newUserName
    }
    static getAllUsernames(userList) {
        return userList.map((user) => user.username)

    }
}
module.exports = UserService