const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const app = express();


//clientId      407936200583-uksolb9od56nv6n4qhpo3a2le9gmrpei.apps.googleusercontent.com

//clientSecret  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

passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 5000;
app.listen(PORT);
