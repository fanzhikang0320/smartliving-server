const { DataTypes } = require('sequelize');
const Sequelize = require('./db');

const Filter = new Sequelize('filter',{
    type: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    fid: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
    },
    parent_fid: {
        type: DataTypes.UUID
    },
    min_price: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    max_price: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 1
    }
},{
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
    createdAt: 'ctime',
    updatedAt: 'utime',
    deletedAt: 'dtime',
    version: true
})

module.exports = Filter;