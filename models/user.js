let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
    firstName: {type: String, required:true},
    lastName:{type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true}
    // possible ref to caffeineList userDrinks: [{type:String, ref:..}]
});
userSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', userSchema);

