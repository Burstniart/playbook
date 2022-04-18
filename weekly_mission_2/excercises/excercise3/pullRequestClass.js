class PullRequest {
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated, author) {
        this.title = title
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
        this.author = author
    }
    getStatus= () => {
        return `${this.title} is currently ${this.status}`
    }
    getTitleAndAuthor= () => {
        return `${this.title} opened by ${this.author}`
    }
}
const myPR = new PullRequest ('Fixing deprecated code', 'Main', '04-17-2022', 'Open', 'Explorer Blog', 'Alejandro Garcia')
console.log(myPR.getStatus())
console.log(myPR.getTitleAndAuthor());