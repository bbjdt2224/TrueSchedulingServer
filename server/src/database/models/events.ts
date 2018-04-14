module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    datetime: DataTypes.DATE,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    groupId: DataTypes.INTEGER,
    creator: DataTypes.INTEGER
  }, {
    paranoid: true
  });
  Events.associate = function(models) {
    // associations can be defined here
  };
  return Events;
};
