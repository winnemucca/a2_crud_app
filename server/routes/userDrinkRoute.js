const express = require('express');
const router = express.Router();
let UserDrinks = require('../../models/userDrinks');


router.post('/addDrink', (req, res, next) => {
    let newDrink = new UserDrinks({
        id: req.body._id,
        caffeine: req.body.caffeine,
        mgFloz: req.body.mgFloz,
        name: req.body.name,
        size: req.body.size
    });
    // let newDrink = new UserDrinks(req.body);
    // newDrink.save();
    // res.status(201).json(newDrink);

    newDrink.save( (err) => {
        if(err) {
            res.send(err);
        } else {
            console.log('saved');
            res.status(201).json(newDrink);
        }

    })
});

module.exports = router;