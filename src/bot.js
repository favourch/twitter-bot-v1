// bot features
// due to the Twitter ToS automation of likes
// is no longer allowed, so:
const Twit = require('twit')
const config = require('./config')
const bot = new Twit(config.twitterKeys)
const retweet = require('./api/retweet')
const reply = require('./api/reply')
const favorite = require('./api/favorite')

const param = config.twitterConfig
const unique = require('unique-random-array')
const queryString = unique(param.queryString.split(','))
const query = queryString()

// retweet on keywords
retweet()
setInterval(retweet, config.twitterConfig.retweet)

favorite()
setInterval(retweet, config.twitterConfig.retweet)

// reply to new follower
const userStream = bot.stream('user')
userStream.on('follow', reply)

//stream retweet
const userFilter = bot.stream('statuses/filter', {track: query})
userFilter.on('data', reply)
