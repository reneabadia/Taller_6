const express = require('express');
const router = express.Router();

const Game = require('../models/Game')

/**
 * Arrow function to display summary of game
 */

router.post('/', (req, res, _next) => {

    const gameSummary= Game.findById(req.body.idGame);

        gameSummary
            .then(result => res.render('summary', {object: result}))
            .catch(error => console.log(error));

})

module.exports = router;