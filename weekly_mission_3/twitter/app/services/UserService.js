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
}
module.exports = UserService

// Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado
//  `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que 
//  actualizará el valor de `username`. 
