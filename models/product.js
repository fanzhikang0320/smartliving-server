const { DataTypes } = require('sequelize');
const Sequelize = require('./db');

// 产品数据表
const Product = new Sequelize('product',{
    title: {
        type: DataTypes.STRING(128),
        comment: 'product title'
    },
    picture: {
        type: DataTypes.STRING(128),
        comment: 'product pictures'
    },
    link: {
        type: DataTypes.STRING(128),
        allowNull: false,
        comment: 'product links'
    },
    price: {
        type: DataTypes.STRING(128),
        comment: 'product price'
    },
    reviews: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
        comment: 'product reviews'
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

module.exports = Product;