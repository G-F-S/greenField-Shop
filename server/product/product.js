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
 
// TODO: Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Product=mongoose.model("product",productSchema);
 

module.exports = Product;