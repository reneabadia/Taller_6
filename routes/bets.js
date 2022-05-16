const express = require('express');
const router = express.Router();

const Player = require('../models/Player')
const Game = require('../models/Game')


/**
 * Endpoint to select bets
 */

router.post('/', (req, res, _next) => {

    const player1 = new Player({
        name: req.body.nameOne
    });
    const player2 = new Player({
        name: req.body.nameTwo
    });
    const player3 = new Player({
        name: req.body.nameThree
    });

    const game = new Game({
        gamers: [player1, player2, player3],
        inProgres:'true',
        winner:null
    })

    game.save()
        .then()
        .catch(error => res.json(error));

    player1.save()
        .then()
        .catch(error => res.json(error));
    
    player2.save()
        .then()
        .catch(error => res.json(error));
    
    player3.save()
        .then()
        .catch(error => res.json(error));


    let playerList = [player1, player2, player3]
    res.render('setBet', { list : playerList });
})

module.exports = router;
