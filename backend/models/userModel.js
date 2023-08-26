const { DataTypes } = require("sequelize");
const db = require("../config/database.js");

const User = db.define(
  "User",
  { name: DataTypes.STRING, email: DataTypes.STRING, gender: DataTypes.STRING },
  {
    timestamps: true,
  }
);

module.exports = User;

(async () => {
  await db.sync();
})();
