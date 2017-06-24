// bot features
// due to the Twitter ToS automation of likes
// is no longer allowed, so:
const Twit = require('twit')
const config = require('./config')
const bot = new Twit(config.twitterKeys)
const retweet = require('./api/retweet')
const reply = require('./api/reply')
const favorite = require('./api/favorite')
const tweetFrequently = require('./api/tweetFrequently')

const param = config.twitterConfig
const textFeed = config.zuchanannetwork
const unique = require('unique-random-array')
const queryString = unique(param.queryString.split(','))
const query = queryString()


// retweet on keywords
retweet()
setInterval(retweet, config.twitterConfig.retweet)

//tweet regularly
//tweetFrequently(textFeed)
//setInterval(tweetFrequently, config.twitterConfig.tweet)

//favorites on keywords
//favorite()
//setInterval(favorite, config.twitterConfig.like)

// reply to new follower
const userStream = bot.stream('user')
userStream.on('follow', reply)

//stream retweet
//const userFilter = bot.stream('statuses/filter', {track: query})
//userFilter.on('data', reply)


