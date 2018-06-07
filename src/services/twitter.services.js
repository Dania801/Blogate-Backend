import passport from 'passport';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import constants from '../config/constants';

const twitterOpts = {
  consumerKey: constants.TWITTER_CONSUMER_KEY,
  consumerSecret: constants.TWITTER_CONSUMER_SECRET,
  callbackURL: constants.TWITTER_CALLBACK_URL,
};

const twitterStrategy = new TwitterStrategy(twitterOpts, async (accessToken, refreshToken, profile, done) => {
  try {
    return done(null, profile);
  } catch (err) {
    return done(err, false);
  }
});

passport.use(twitterStrategy);

export const authTwitter = passport.authenticate('twitter', { session: false });
export const authTwitterCallback = passport.authenticate('twitter', { session: false, failureRedirect: '/' });
