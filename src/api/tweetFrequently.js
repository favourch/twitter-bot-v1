'use strict'

const Twit = require('twit')
const unique = require('unique-random-array')
const config = require('../config')
const param = config.twitterConfig
const randomReply = unique(param.randomReply.split('|'))
const bot = new Twit(config.twitterKeys)
const zuchananTweets = config.zuchanannetwork
const Chance = require('chance')
let chance = new Chance(Math.random)

function tweetFrequently(tweetArray) {
  const rando = Math.floor(Math.random() * param.searchCount)
  console.log ('random number selected is  ' + rando)
  let time = new Date();
  let variableHashtag = chance.hashtag()
  let returnedTweetArray = returnZuchananArrayString();
  let tweet = {
    status: returnedTweetArray[rando] + ' ' + variableHashtag
  }
   bot.post('statuses/update', tweet, (err, data, response) => {
    if (err) {
      console.log('ERRORDERP tweet', err + '---------------------' + time)
    }
    else { console.log('tweet ' +  returnedTweetArray[rando] + ' ' + variableHashtag + ' successfully posted at ' + time)
      }
    })
}

function returnZuchananArrayString () {
 let tweetArray = []
    tweetArray.push(zuchananTweets.zuchananTweet1)
    tweetArray.push(zuchananTweets.zuchananTweet2)
    tweetArray.push(zuchananTweets.zuchananTweet3)
    tweetArray.push(zuchananTweets.zuchananTweet4)
    tweetArray.push(zuchananTweets.zuchananTweet5)
    tweetArray.push(zuchananTweets.zuchananTweet6)
    tweetArray.push(zuchananTweets.zuchananTweet7)
    tweetArray.push(zuchananTweets.zuchananTweet8)
    tweetArray.push(zuchananTweets.zuchananTweet9)
    tweetArray.push(zuchananTweets.zuchananTweet10)
    tweetArray.push(zuchananTweets.zuchananTweet11)
    tweetArray.push(zuchananTweets.zuchananTweet12)
    tweetArray.push(zuchananTweets.zuchananTweet13)
    tweetArray.push(zuchananTweets.zuchananTweet14)
    tweetArray.push(zuchananTweets.zuchananTweet15)
    tweetArray.push(zuchananTweets.zuchananTweet16)
    tweetArray.push(zuchananTweets.zuchananTweet17)
    tweetArray.push(zuchananTweets.zuchananTweet18)
    tweetArray.push(zuchananTweets.zuchananTweet19)
    tweetArray.push(zuchananTweets.zuchananTweet20)
    
    tweetArray.push(zuchananTweets.zuchananTweet21)
    tweetArray.push(zuchananTweets.zuchananTweet22)
    tweetArray.push(zuchananTweets.zuchananTweet23)
    tweetArray.push(zuchananTweets.zuchananTweet24)
    tweetArray.push(zuchananTweets.zuchananTweet25)
    tweetArray.push(zuchananTweets.zuchananTweet26)
    tweetArray.push(zuchananTweets.zuchananTweet27)
    tweetArray.push(zuchananTweets.zuchananTweet28)
    tweetArray.push(zuchananTweets.zuchananTweet29)
    tweetArray.push(zuchananTweets.zuchananTweet30)
    tweetArray.push(zuchananTweets.zuchananTweet31)
    tweetArray.push(zuchananTweets.zuchananTweet32)
    tweetArray.push(zuchananTweets.zuchananTweet33)
    tweetArray.push(zuchananTweets.zuchananTweet34)
    tweetArray.push(zuchananTweets.zuchananTweet35)
    tweetArray.push(zuchananTweets.zuchananTweet36)
    tweetArray.push(zuchananTweets.zuchananTweet37)
    tweetArray.push(zuchananTweets.zuchananTweet38)
    tweetArray.push(zuchananTweets.zuchananTweet35)
    tweetArray.push(zuchananTweets.zuchananTweet40)
    
    
 return tweetArray
}

module.exports = tweetFrequently

