const express = require('express');
const router = express.Router();

const Game = require('../models/Game')


/**
 * Endpoint to parse bet amount to players
 */

router.post('/', (req, res, _next) => {

    let game;

    const data = Game.find();
    
    data.then(answer => {

        game = answer[answer.length - 1];
        game.gamers[0].bet = req.body.betOne;
        game.gamers[1].bet = req.body.betTwo;
        game.gamers[2].bet = req.body.betThree;
        
        Game.findByIdAndUpdate(game.id , game)
            .then()
            .catch(error => res.json(error));
        
            res.render('roll' , {gameToMenu: game });
    
    }).catch(error => res.json(error));

})

module.exports = router;
