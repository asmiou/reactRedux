const loadash = require('lodash');
const User = require('../models/user');

exports.signup = function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    //Check if email or password is empty
    if(loadash.isEmpty(email) || loadash.isEmpty(password)){
        return res.status(422).send({maessage: "Email ou mot de passe vide", status:422})
    }

    //check if user email is not used
    User.findOne({email}, function(err, result){
        if(err){
            return next(err);
        }
        if(result){
            return res.status(422).send({maessage: "Email utilisée", status:422})
        }
    });

    //Sauvegarde des données
    const user = new User({
        email,
        password
    });

    user.save((err)=>{
        if(err){
            return next(err);
        }
        res.status(201).json(user);
    })
};