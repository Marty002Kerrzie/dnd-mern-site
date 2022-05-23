const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    character: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    user: {
        type: String,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Account', accountSchema);