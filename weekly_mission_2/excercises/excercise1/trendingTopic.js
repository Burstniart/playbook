const trendingTopic = {
    location: 'Mexico',
    tweets: 5839,
    hashtag: 'Ackerman',
    position: 2,
    category: 'Entertainment',
    getTT: function() {
        return `${this.position} ~ ${this.category} ~ Trending \n#${this.hashtag} \n${this.tweets} Tweets`
    }
}
console.log(trendingTopic.getTT())