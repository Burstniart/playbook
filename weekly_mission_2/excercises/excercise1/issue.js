const issue = {
    title : 'Something going on',
    repositoryNameAssociated : 'My repository',
    status: 'Open',
    numberOfComments: 23,
    labels: ['Javascript', 'Error in console', 'Modules'],
    author: 'Alejandro Garcia',
    dateCreated: '04-11-2022 23:47',
    lastUpdated: '04-17-2022 15:43',
    getTitleAndAuthor: function() {
        return `${this.title} is an issue from ${this.author}`
    },
    getGeneralInfo: function() {
        return `${this.title}, Status: ${this.status} by  ${this.author}`
    }
}

console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());