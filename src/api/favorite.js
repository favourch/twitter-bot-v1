'use strict'

const Twit = require('twit')
const unique = require('unique-random-array')
const config = require('../config')

const param = config.twitterConfig
const hashTagString = unique(param.queryString.split(','))

const bot = new Twit(config.twitterKeys)

const favorite = () => {

  const hashtag = hashTagString()

  bot.get('search/tweets', {
    q: hashtag,
    result_type: param.resultType,
    lang: param.language,
    filter: 'safe',
    count: param.searchCount
  }, (err, data, response) => {
    if (err) {
      console.log('ERRORDERP: Cannot Search Tweet!, Description here: ', err)
    } else {
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

      bot.post('favorites/create/:id', {
        
        id: retweetId
      }, (err, response) => {
        if (err) {
          console.log('ERRORDERP: favorite!')
        }
        console.log('SUCCESS: favorited!! : ', data.statuses[rando].text, 'RANDO ID: ', rando)
      })
    }
  })
}

module.exports = favorite