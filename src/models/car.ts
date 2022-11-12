import { DataTypes, Model } from "sequelize";

import sequelize from "@configs/db.config";

interface CarAttributes {
  id: number;
  name: string;
  cost: number;
  capacity: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

class Car extends Model<CarAttributes> implements CarAttributes {
  declare id: number;
  declare name: string;
  declare cost: number;
  declare capacity: number;
  declare image: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Car.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "cars",
    modelName: "Car",
    sequelize,
  }
);

export default Car;
