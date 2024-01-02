const { DataTypes, Model } = require('sequelize')
const sequelize = require('../../config/database')

class Device extends Model {}

Device.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
  },
  {
    modelName: 'device',
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    indexes: [
      {
        unique: true,
        fields: ['id'],
      },
    ],
  }
)

module.exports = Device
