const hashtag = {
    hashtag: 'SweetPie',
    tweets: 15839,
    top: {
        tweet: 'Hello #SweerPie',
        likes: 454,
        retweets: 300,
        username: 'Baker God',
        date: '04-16-2022'
    },
    latest: {
        tweet: 'Meeting today with my #SweerPie',
        likes: 44,
        retweets: 33,
        username: 'Jhin44',
        date: '04-17-2022'
    },
    topTweet: function() {
        return this.top
    },
    latestTweet: function() {
        return this.latest
    }
}
console.log(hashtag.topTweet());
console.log(hashtag.latestTweet());