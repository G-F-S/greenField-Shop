// This is the model

var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

// TODO: Complete the pokemonSchema below.
var productSchema=mongoose.Schema({
    User:{type:String,required:true},
    Phonenumber:{type:Number,unique:true,required:true},
    Product:{type:String,unique:true,required:true},
    Category:[String],
    ImageUrl:{type:String},

})
 var userSchema=mongoose.Schema({
    User:{type:String,required:true},
    password:{type:String,required:true}

 })
 
// TODO: Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Product=mongoose.model("product",productSchema);
 var Users=mongoose.model('User',userSchema)

module.exports = {Product,Users};