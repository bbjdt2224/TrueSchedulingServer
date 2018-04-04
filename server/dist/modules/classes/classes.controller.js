"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../database/models/index");
class ClassesController {
    getAllClasses(req, res) {
        if (req.session.passport.user) {
            index_1.default.classes.findAll({
                where: {
                    user: req.session.passport.user.id,
                    semester: req.params.semester,
                    year: req.params.year
                }
            }).then(classes => {
                res.send(classes);
            }, error => {
                res.send(error);
            });
        }
    }
    newClass(req, res) {
        if (req.session.passport.user) {
            index_1.default.classes.create({
                user: req.session.passport.user.id,
                semester: req.body.semester,
                year: req.body.year,
                days: req.body.days,
                start: req.body.start,
                end: req.body.end,
                title: req.body.title,
                building: req.body.building,
                room: req.body.room
            }).then(success => {
                res.send(success);
            }, error => {
                res.send(error);
            });
        }
    }
    getClass(req, res) {
        if (req.session.passport.user) {
            index_1.default.classess.findById(req.params.id).then(classes => {
                res.send(classes);
            }, error => {
                res.send(error);
            });
        }
    }
    editClass(req, res) {
        if (req.session.passport.user) {
            index_1.default.classes.update({
                days: req.body.days,
                start: req.body.start,
                end: req.body.end,
                title: req.body.title,
                building: req.body.building,
                room: req.body.room
            }, {
                where: {
                    id: req.params.id
                }
            }).then(update => {
                res.send(update);
            }, error => {
                res.send(error);
            });
        }
    }
    deleteClass(req, res) {
        if (req.session.passport.user) {
            index_1.default.classes.findById(req.body.id).then(cls => {
                res.send(null);
                return cls.destroy();
            });
        }
    }
}
exports.default = new ClassesController();
