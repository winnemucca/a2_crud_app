const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const UserDrinks = require('../../models/userDrinks');


router.post('/addDrink', (req, res, next) => {
    let newDrink = new UserDrinks({
        user: req.headers.authorization, //req.body._id
        caffeine: req.body.caffeine, 
        mgFloz: req.body.mgFloz,
        name: req.body.name,
        size: req.body.size,
        updated_at: req.body.updated_at
    });
    
    newDrink.save( (err) => {
        if(err) {
            res.send(err);
        } else {
            User.findOne({ _id: newDrink.user},  (err, user) => { // possibly can pass local storage as a header
                console.log('user', newDrink)
                user.caffeine_list.addToSet(newDrink)
                user.save( function (err) {
                    if(err) {
                        console.log(err);
                    }else {
                        res.status(201).json(newDrink);
                    }
                })
            })
           
        }

    })
});


//  User.update(
//     { _id: newDrink.creator},            
//     {  $addToSet:{ 
//       caffeine_list: newDrink
//   }}).exec(function (err, updatedrink){

//     if(err) {
//         console.log(err);
//     }else {
//         res.status(201).json(updatedrink);
//     }

// })

module.exports = router;