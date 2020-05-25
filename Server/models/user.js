const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//création du model
const userSchema = new Schema({
    email:{type: String, unique:true, lowercase:true},
    password: String
})

//On va nommer la collection dans la base de données et l'associer au schema
const User = mongoose.model('user', userSchema);
module.exports = User;