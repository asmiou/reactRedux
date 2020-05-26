const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

//création du model
const userSchema = new Schema({
    email:{type: String, unique:true, lowercase:true},
    password: String
});

//Encryptage du mot de passe
userSchema.pre('save',function(next){
    const user = this;
    bcrypt.genSalt(12, (err, salt)=>{
        if(err) return next(err);
        bcrypt.hash(user.password, salt, null, (err, hash)=>{
            if(err) return next(err);
            user.password = hash;
            next();
        });
    });
});

//Vérification du mot de passe
userSchema.methods.isPasswordEqualTo = function(password, done){
    bcrypt.compare(password, this.password, (err, isMatch)=>{
        if(err) return done(err);
        done(null, isMatch);
    });
};

//On va nommer la collection dans la base de données et l'associer au schema
const User = mongoose.model('user', userSchema);
module.exports = User;