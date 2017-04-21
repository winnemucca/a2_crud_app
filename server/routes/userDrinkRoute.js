const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const UserDrinks = require('../../models/userDrinks');


router.post('/addDrink', (req, res, next) => {
    let newDrink = new UserDrinks({
        user: req.body.user,
       // creator: req.body.creator, // need id get user object id()
        caffeine: req.body.caffeine,
        mgFloz: req.body.mgFloz,
        name: req.body.name,
        size: req.body.size,
        updated_at: req.body.updated_at
    });

//     function renameCreatorField() {
//         UserDrinks.update({}, { $rename: { "creator" : "user" } }, { multi: true }, function(err, data) {
//              if (!err) { 
//                      //success
//                      console.log('success'); 
//                 }
//             })
//         }

// renameCreatorField();
    
    newDrink.save( (err) => {
        if(err) {
            res.send(err);
        } else {
            console.log('hit');
            User.findOne({ _id: newDrink.user},  (err, user) => { // was newDrink.creator
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