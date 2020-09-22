const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

//second variable we are passing in before the callback to protect  URl
const authMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.status(401).send("You are not authenticated");
    } else {
        return next();
    }
};

//After logging in, it will store the user object data in a cookie-session, and retrieve the data on later requests.
passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },

        async (username, password, done) => {
            const user = await User.findOne({ email: username })

            if (user) {
                done(null, user);
            } else {
                done(null, false, { message: "Incorrect username or password" });
            }
        }
    )
);

module.exports = authMiddleware
