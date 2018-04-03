"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_controller_1 = require("./classes.controller");
exports.default = (app) => {
    app.route('/api/classes/:year/:semester')
        .get(classes_controller_1.default.getAllClasses)
        .post(classes_controller_1.default.newClass);
    app.route('/api/class/:id')
        .get(classes_controller_1.default.getClass)
        .put(classes_controller_1.default.editClass);
    app.route('/api/delete')
        .post(classes_controller_1.default.editClass);
};
