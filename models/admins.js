"use strict";
module.exports = (sequelize, DataTypes) => {
  const admins = sequelize.define(
    "admins",
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  admins.associate = function(models) {
    // associations can be defined here
  };
  return admins;
};
