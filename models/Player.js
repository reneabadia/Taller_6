const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Define player schema
 */
const userSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'Player name is requierd']
    },
    bet:{
        type: Number,
        trim: true,
    }
});

module.exports = Player = mongoose.model('Player', userSchema);