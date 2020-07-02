const TwitterStrategy = require("passport-twitter").Strategy;
const User = require("../models/User");

// Configures a given passport to use the Twitter and Local Strategies
module.exports = passport => {
    passport.use(new TwitterStrategy({
            consumerKey: process.env.TWITTER_CONSUMER_KEY,
            consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
            callbackURL: "http://localhost:8000/api/auth/twitter/callback"
        },
        async (token, tokenSecret, profile, done) => {
            const { id, name, description, profile_image_url: profileImage, screen_name: handle } =
                profile._json;
            const requestUser = {
                twitterID: id,
                twitterHandle: handle,
                displayName: name,
                profileImage: profileImage,
                biography: description
            }
            console.log(requestUser);
            try {
                let user = await User.findOne({ twitterID: requestUser.twitterID });
                if (!user) {
                    user = await User.create(requestUser);
                }
                done(null, user);
            } catch (error) {
                console.error(error);
            }
        }
    ));

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
    });
};