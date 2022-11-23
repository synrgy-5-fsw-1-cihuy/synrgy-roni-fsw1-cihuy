"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

import sequelize from "@configs/db.config";

const basename = path.basename(__filename);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const db: any = {};

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
    );
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .forEach((file: any) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
