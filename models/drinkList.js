let express = require('express');
let mongoose = require('mongoose');

let DrinkSchema = new mongoose.Schema({ // if issues go back to new Schema
    mgFloz: Number,
    name: String,
    imageUrl: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('AvailableDrinks', DrinkSchema);

//let Drink = mongoose.model('Drink', )