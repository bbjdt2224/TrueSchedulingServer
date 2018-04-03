'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        grouplist: DataTypes.STRING
    }, {});
    user.associate = function (models) {
    };
    return user;
};
