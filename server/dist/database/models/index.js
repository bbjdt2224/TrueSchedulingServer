"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const sequelize_1 = require("sequelize");
const basename = path.basename(__filename);
const env = 'development';
const config_1 = require("./../config/config");
const config = config_1.default[env];
const sequelize = new sequelize_1.default(config.database, config.username, config.password, config);
const db = {
    users: sequelize.import('./users'),
    classes: sequelize.import('./classes'),
    groups: sequelize.import('./groups'),
    groupRelation: sequelize.import('./grouprelation')
};
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = sequelize_1.default;
exports.default = db;
