const mongoose = require('mongoose');
const express = require('express');
mongoose.Promise = global.Promise;

const User = require('./user');

let userDrinkSchema = new mongoose.Schema({ // if issues go back to new Schema

    user : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'  // was name of user file  user
    },
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
