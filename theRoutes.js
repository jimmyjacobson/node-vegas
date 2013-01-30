module.exports = function(app) {
        routes = require('./routes'), user = require('./routes/user');
        app.get('/', routes.index);
        app.get('/users', user.list);
        app.get('/contact', routes.contact);
        app.post('/contact', routes.handleContactForm);
        app.get('/ray', routes.rayray);
        app.get('/paulisit',routes.paulisit);
};
