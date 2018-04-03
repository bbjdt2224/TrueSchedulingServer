"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const groups_controller_1 = require("./groups.controller");
exports.default = (app) => {
    app.route('/api/group')
        .get(groups_controller_1.default.getAllUserGroups)
        .post(groups_controller_1.default.createGroup);
    app.post('/api/code', groups_controller_1.default.checkCode);
    app.post('/api/join', groups_controller_1.default.join);
};
