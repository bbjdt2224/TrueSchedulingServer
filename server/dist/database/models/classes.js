module.exports = (sequelize, DataTypes) => {
    const classes = sequelize.define('classes', {
        user: DataTypes.INTEGER,
        semester: DataTypes.STRING,
        year: DataTypes.INTEGER,
        days: DataTypes.STRING,
        start: DataTypes.TIME,
        end: DataTypes.TIME,
        title: DataTypes.STRING,
        building: DataTypes.STRING,
        room: DataTypes.STRING
    }, {
        paranoid: true
    });
    classes.associate = function (models) {
    };
    return classes;
};
