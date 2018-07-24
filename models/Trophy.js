'use strict';
module.exports = function(sequelize, DataTypes) {
  var Trophy = sequelize.define('Trophy', {
    activity: DataTypes.STRING,
    childOf: DataTypes.INTEGER,
    activityCreator: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    },
  freezeTableName: true
  });
  return Trophy;
};