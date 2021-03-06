'use strict'

const Twit = require('twit')
const unique = require('unique-random-array')
const config = require('../config')
const param = config.twitterConfig
const randomReply = unique(param.randomReply.split('|'))


const bot = new Twit(config.twitterKeys)

// function: tweets back to user who followed
function tweetNow(text) {
   let time = new Date();
  let tweet = {
    status: text
  }

let selfName = text.search('/@zuchanannetwork/i')
  
  if (selfName!= -1 ){
      console.log(' oops tweeting to self....skip! ')
  }else {
  bot.post('statuses/update', tweet, (err, data, response) => {
    if (err) {
      console.log('ERRORDERP Reply', err + '-------------------' + time)
    }
    console.log('SUCCESS: Replied: ', text + ' at ' + time)
    })
  }
}

// function: replies to user who followed
const reply = (event) => {
  // get user's twitter handler/screen name
  let screenName = event.source.screen_name

  const response = randomReply()

  const res = response.replace('${screenName}', screenName);

  tweetNow(res)
}


module.exports = reply
