let express = require('express');
let mongoose = require('mongoose');
const User = require('./user');

let DrinkSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
        required: true,
        default: null
    },
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