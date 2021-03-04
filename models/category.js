const { DataTypes } = require('sequelize');
const Sequelize = require('./db');

// 定义 用于存储商品 类别信息
const Category = new Sequelize('category',{
    type: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    mid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    parent_mid: {
        type: DataTypes.UUID,
        allowNull: false
    }
},{
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
    createdAt: 'ctime',
    updatedAt: 'utime',
    deletedAt: 'dtime',
    version: true
});

module.exports = Category;