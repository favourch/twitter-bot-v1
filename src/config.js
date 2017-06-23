require('dotenv').config()

module.exports = {
  twitterKeys: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  },
  twitterConfig: {
    queryString: process.env.QUERY_STRING,
    resultType: process.env.RESULT_TYPE,
    language: process.env.LANG,
    username: process.env.TWITTER_USERNAME,
    retweet: process.env.TWITTER_RETWEET_RATE * 1000 * 60,
    tweet:process.env.TWITTER_TWEET_RATE * 1000 * 60,
    like: process.env.TWITTER_LIKE_RATE * 1000 * 60,
    quote: process.env.TWITTER_QUOTE_RATE * 1000 * 60,
    searchCount: process.env.TWITTER_SEARCH_COUNT,
    randomReply: process.env.RANDOM_REPLY,
    hashtagString: process.env.HASHTAG_STRING
  },
  zuchanannetwork: {
    zuchananTweet1:process.env.ZUCHANAN_TWEET_1,
    zuchananTweet2:process.env.ZUCHANAN_TWEET_2,
    zuchananTweet3:process.env.ZUCHANAN_TWEET_3,
    zuchananTweet4:process.env.ZUCHANAN_TWEET_4,
    zuchananTweet5:process.env.ZUCHANAN_TWEET_5,
    zuchananTweet6:process.env.ZUCHANAN_TWEET_6,
    zuchananTweet7:process.env.ZUCHANAN_TWEET_7,
    zuchananTweet8:process.env.ZUCHANAN_TWEET_8,
    zuchananTweet9:process.env.ZUCHANAN_TWEET_9,
    zuchananTweet10:process.env.ZUCHANAN_TWEET_10,
    zuchananTweet11:process.env.ZUCHANAN_TWEET_11,
    zuchananTweet12:process.env.ZUCHANAN_TWEET_12,
    zuchananTweet13:process.env.ZUCHANAN_TWEET_13,
    zuchananTweet14:process.env.ZUCHANAN_TWEET_14,
    zuchananTweet15:process.env.ZUCHANAN_TWEET_15,
    zuchananTweet16:process.env.ZUCHANAN_TWEET_16,
    zuchananTweet17:process.env.ZUCHANAN_TWEET_17,
    zuchananTweet18:process.env.ZUCHANAN_TWEET_18,
    zuchananTweet19:process.env.ZUCHANAN_TWEET_19,
    zuchananTweet20:process.env.ZUCHANAN_TWEET_20
  }
}
