const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Define game schema
 */
const gameSchema = new Schema({

    gamers: {
        type: [],
        required: [true, 'Username is requierd'],
        trim: true
    },
    inProgres:{
        type:String,
        trim: true
    },
    winner:{
        type:String
    }
});

module.exports = Game = mongoose.model('Game', gameSchema);