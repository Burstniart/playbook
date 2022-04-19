class Spiderman {
    constructor (name, age, actor, movies, studio) {
        this.name = name
        this.age = age
        this.actor = actor
        this.movies = movies
        this.studio = studio
    }
// tomHolland.getInfo() // esto necesita regresar: "Hey, I'm Tom Holland from Marvel studio"
    getInfo = () => {
        return `Hey, I'm ${this.actor} from ${this.studio} studio`
    }
}
module.exports = Spiderman