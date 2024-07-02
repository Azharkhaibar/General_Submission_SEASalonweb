import { Sequelize } from "sequelize";
import db from "../config/database";

const { DataTypes } = Sequelize;

const Review = db.define(
  "reviews",
  {
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

export default Review;

(async () => {
  await db.sync();
})();
