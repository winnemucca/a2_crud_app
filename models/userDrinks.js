let express = require('express');
let mongoose = require('mongoose');

let userDrinkSchema = new mongoose.Schema({ // if issues go back to new Schema
    caffeine: Number,
    mgFloz: Number,
    name: String,
    size: Number,
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('SelectedDrinks', userDrinkSchema);
