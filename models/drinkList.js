let express = require('express');
let mongoose = require('mongoose');
let Drink = require('../models/drinkList');

let DrinkSchema = new mongoose.Schema({
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