let express = require('express');
let mongoose = require('mongoose');
var User = require('./user');

let userDrinkSchema = new mongoose.Schema({ // if issues go back to new Schema
   // user: [User],
    caffeine: Number,
    mgFloz: Number,
    name: String,
    size: Number,
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('SelectedDrinks', userDrinkSchema);
