const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//creating the username requirements - will need this for passwords as well
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
}, {
    //keeping a timestamp of the username creation
    timestamps: true,
});

const User = mongoose.model('User:', userSchema);

module.exports = User;