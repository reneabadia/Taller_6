const express = require('express');
const router = express.Router();

const Game = require('../models/Game')

/**
 * Function to display name and amount of winner player
 */

router.get('/', (_req, res, _next) => {

    let endGame;    
    let winner;    
    let amount;
    const randomWinner = Math.round(Math.random() * 3)    
    const getWinner = Game.find();
    
    
    getWinner.then(result => {
        
        endGame = result[result.length - 1]       
        amount = Number(endGame.gamers[0].bet) + Number(endGame.gamers[1].bet) + Number(endGame.gamers[2].bet);        
        winner = endGame.gamers[randomWinner];        
        res.render('winner' ,{winner: winner, amount: amount})
    
    }).catch(error => console.log(error))



});



module.exports = router;