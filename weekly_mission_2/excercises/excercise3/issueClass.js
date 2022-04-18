

class Issue {
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title =  title 
        this.repositoryNameAssociated = repositoryNameAssociated 
        this.status =  status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated= lastUpdated
    }
    getTitleAndAuthor= () => {
        return `${this.title} is an issue from ${this.author}`
    }
    getGeneralInfo= () => {
        return `${this.title}, Status: ${this.status} by  ${this.author}`
    }
}
const myIssue = new Issue ('Something going on', 'My repository', 'Open', 23, ['Javascript', 'Error in console', 'Modules'], 
    'Alejandro Garcia', '04-11-2022 23:47', '04-17-2022 15:43')
console.log(myIssue.getGeneralInfo());
console.log(myIssue.getTitleAndAuthor());
