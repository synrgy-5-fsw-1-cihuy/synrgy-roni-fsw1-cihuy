import { DataTypes, Model } from "sequelize";

import sequelize from "@configs/db.config";

class Car extends Model {
  id!: string;
  name!: string;
  cost!: number;
  capacity!: string;
  image!: string;
  available!: boolean;
  createdBy!: number;
  deletedBy!: number;
  updatedBy!: number;
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
}

Car.init(
  {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.ENUM("small", "medium", "large"),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "cars",
    modelName: "Car",
    sequelize,
    paranoid: true,
  }
);

export default Car;
