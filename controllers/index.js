'use strict';

module.exports.controller = (app) => {
    // get homepage
    app.get('/', (req, res) => {
        res.render('index', { title: 'Express', render: ' - Pug', frontend: ' - Bootstrap' });
    });

    app.get('/clients', (req, res) => {
        res.render('index', { title: 'Clients' });
    });
}