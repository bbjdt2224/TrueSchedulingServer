"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../database/models/index");
const passport = require("passport");
const bcrypt = require("bcrypt");
class UsersController {
    configure(username, password, done) {
        index_1.default.users.findOne({ where: { email: username } }).then(function (user) {
            if (!user) {
                return done(null, false);
            }
            passport.serializeUser(function (user, done) {
                done(null, user);
            });
            passport.deserializeUser(function (user, done) {
                done(null, user);
            });
            bcrypt.compare(password, user.password, function (err, res) {
                if (res === true) {
                    return done(null, user);
                }
                if (res === false) {
                    return done(null, false);
                }
                return done(null, false);
            });
        });
    }
    signup(req, res) {
        index_1.default.users.create({
            email: req.body.email,
            name: req.body.name,
            grouplist: '0'
        }).then(user => {
            bcrypt.hash(req.body.password, 10, function (err, hash) {
                user.update({
                    password: hash
                });
            });
            res.send(user.name);
        });
    }
    login(req, res) {
        res.send(req.session.passport.user);
    }
    fail(req, res) {
        res.send('Incorrect');
    }
    logout(req, res) {
        req.logout();
        res.send('Logged Out');
    }
}
exports.default = new UsersController();
