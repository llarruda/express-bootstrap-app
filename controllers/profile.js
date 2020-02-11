'use strict';

module.exports.controller = (app) => {
    // get profile page
    app.get('/profile', (req, res) => {
        res.render('index', { title: 'Profile' });
    });
}