import { DataTypes, Model } from "sequelize";

import sequelize from "@configs/db.config";

class Car extends Model {
  id!: string;
  name!: string;
  cost!: number;
  capacity!: string;
  image!: string;
  created_by!: number;
  deleted_by!: number;
  updated_by!: number;
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
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "cars",
    modelName: "Car",
    sequelize,
  }
);

export default Car;
