const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg: 'failed to register user'})
        }else {
            res.json({success: true, msg: 'user registered'})
        }
    })
}) // automatically /users/register

router.post('/authentication', (req, res, next) =>{
    res.send('authentication');
})

router.get('/user', (req, res, next) => {

});


module.exports = router;