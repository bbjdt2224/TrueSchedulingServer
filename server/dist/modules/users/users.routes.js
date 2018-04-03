"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const LocalStrategy = require("passport-local");
const users_controller_1 = require("./users.controller");
exports.default = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, users_controller_1.default.configure));
    app.post('/api/signup', users_controller_1.default.signup);
    app.post('/api/login', passport.authenticate('local', { failureRedirect: '/api/failure' }), users_controller_1.default.login);
    app.get('/api/failure', users_controller_1.default.fail);
    app.post('/api/logout', users_controller_1.default.logout);
};
