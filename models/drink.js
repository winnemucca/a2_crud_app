let mongoose = require('mongoose');

let DrinkSchema = new mongoose.Schema({
    drink: String,
    userId: String,
    caffeineList: String // object to be refactored
})

//let Drink = mongoose.model('Drink', )