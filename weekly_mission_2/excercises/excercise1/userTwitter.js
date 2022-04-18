const user = {
    username : 'lex_gace',
    name: 'Alejandro',
    bio: '23 years old, Systems engineer, Have a nice cup of coffee',
    age: '23',
    location: 'Mexico',
    dateOfCreation: 'April 2022',
    followers: 0,
    following: 25,
    userInfo: function() {
        return `${this.name} @${this.username} "${this.bio}" Followers: ${this.followers} Following: ${this.following}`
    }
}
console.log(user.userInfo());