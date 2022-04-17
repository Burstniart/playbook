const pullRequest= {
    title: 'Fixing deprecated code',
    branchName: 'Main',
    dateCreated: '04-17-2022 15:55',
    status: 'Open',
    repositoryNameAssociated: 'Explorer Blog',
    author: 'Alejandro Garcia',
    getStatus: function() {
        return `${this.title} is currently ${this.status}`
    },
    getTitleAndAuthor: function() {
        return `${this.title} opened by ${this.author}`
    }
}
console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());