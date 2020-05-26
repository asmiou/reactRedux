const passport = require('passport');
const User = require('../models/user');
const config = require ('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local')

const jwtOptions ={
    //On extrait le token de l'entete de la requete avec la clé authorization
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret_key
};

//On déclare la stratégie de connexion
const strategyLogin = new JwtStrategy(jwtOptions, (payload, done)=>{
    const email = payload.sub;
    User.findOne({email}, function(err, result){
        if(err){ // si erreur on retourne erreur
            return done(err);
        }
        if(result){ // si on trouve l'utilisateur le retourne et l'erreur on met null
            return done(null, result)
        }else{ // si pas d'erreur et pas de d'utilisateur on renvoie false
            return done(null,false);
        }
    });
});

const credentialOptions ={
    usernameField: "email",
    passwordField: "password"
}

const localLoginStratey = new LocalStrategy(credentialOptions, (email, password, done)=>{
    User.findOne({email}, (err, user)=>{
        if(err) return done(err);
        if(!user) return done(null, false);
        user.isPasswordEqualTo(password, (err, isMatch)=>{
            if(err) return done(err);
            if(!isMatch) return done(null, false);
            
            return done(null, user);
        })
    });
});

//On demande à passport d'utiliser la stratégie.
passport.use(strategyLogin);
passport.use(localLoginStratey);