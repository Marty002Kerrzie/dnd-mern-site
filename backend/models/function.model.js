const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//creatng the account information that we will need
const accountSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true },
    Email: {type: String, required: true},
}, {
    //keeping a timestamp of when the account was created
    timestamps: true,
});

const Account = mongoose.model('Account:', accountSchema);

module.exports = Account;