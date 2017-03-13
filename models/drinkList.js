let express = require('express');
let mongoose = require('mongoose');

let DrinkSchema = new mongoose.Schema({ // if issues go back to new Schema
    caffeine: Number,
    mgFloz: Number,
    name: String,
    size: Number,
    imageUrl: String,
    date: {
        type: Date,
        default: Date.now()
    }
},
{
    collection: 'drinkList'
});

module.exports = mongoose.model('AvailableDrinks', DrinkSchema);

//let Drink = mongoose.model('Drink', )