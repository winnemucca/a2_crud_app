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

router.post('/authenticate', (req, res, next) =>{
    const username = req.body.userName;
    const password = req.body.password;
    console.log('req.body', req.body);

    User.getUserByUserName(username, (err, user) => {
        if(err) throw err;
        console.log('null?', user);
        if(!user) {
            return res.json({success: false, message: 'user not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;

            if(isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 week worth of seconds
                });

                res.json({
                    success: true, 
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }
                })
            } else {
                return res.json({ success: false, msg: 'wrong password'});
            }
        });
    })
})

router.get('/user', (req, res, next) => {

});


module.exports = router;