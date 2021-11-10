const passport = require('passport');


// route handler
module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))


  // add seco1nd route handler to auth/google/callback
  app.get('/auth/google/callback', passport.authenticate('google'))
}