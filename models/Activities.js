'use strict';
module.exports = function(sequelize, DataTypes) {
  var Activities = sequelize.define('Activities', {
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
  return Activities;
};