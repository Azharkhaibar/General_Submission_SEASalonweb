import { Sequelize } from "sequelize";
import db_sea from "../database";

const { DataTypes } = Sequelize;

export const Reservation = db_sea.define(
  "reservations",
  {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    services: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

async () => {
  await db_sea.sync();
};
