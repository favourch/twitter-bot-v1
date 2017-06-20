'use strict'

const Twit = require('twit')
const unique = require('unique-random-array')
const config = require('../config')

const param = config.twitterConfig
const queryString = unique(param.queryString.split(','))

const bot = new Twit(config.twitterKeys)

const retweet = () => {

  const query = queryString()

  bot.get('search/tweets', {
    q: query,
    result_type: param.resultType,
    lang: param.language,
    filter: 'safe',
    count: param.searchCount
  }, (err, data, response) => {
    if (err) {
      console.log('ERRORDERP: Cannot Search Tweet!, Description here: ', err)
    } else if ((data && data.statuses[0])) {
      // grab tweet ID to retweet
      const rando = Math.floor(Math.random() * param.searchCount) + 1
      let retweetId
      try {
        console.log (JSON.stringify(data))
        retweetId = data.statuses[rando].id_str      
      } catch (e) {
        console.log('ERRORDERP: Cannot assign retweetId because of ' + e)
        return
      }

      bot.post('statuses/retweet/:id', {
        
        id: retweetId
      }, (err, response) => {
        if (err) {
          console.log('ERRORDERP: Retweet!')
        }
        console.log('SUCCESS: RT: ', data.statuses[rando].text, 'RANDO ID: ', rando)
      })
    }
    else {
      console.log ('No search tweets returned for ' + query)
    }
  })
}

module.exports = retweet