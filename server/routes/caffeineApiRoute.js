const express = require('express');
const router = express.Router();
let DrinksAvailable = require('../../models/drinkList');
router.get('/drinks', (req, res) => {
    DrinksAvailable.find((err, drinks) => {
        if(err) {
            return res.status(500).json({
                title: 'error occured finding drinks',
                error: err
            })
        } else {
            res.status(200).json(drinks);
        }
    })
})

module.exports = router;