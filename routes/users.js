const express = require('express');
const router = express.Router();

const Player = require('../models/Player')

router.get('/', (_req, res, _next) => {
    res.render('users' );
});

router.get('/add', (_req, res, _next) => {
    const data = Player.find();
    data
        .then((result => res.json(result)))
        .catch(error => console.log(error));
});

module.exports = router;
