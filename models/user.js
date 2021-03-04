
const { DataTypes } = require('sequelize');
const sequelize = require('./db');

// 定义管理员 表
const User = sequelize.define('user',{
    account: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
        comment: 'Account'
    },
    pwd: {
        type: DataTypes.STRING(128),
        allowNull: false,
        comment: 'Password'
    },
    role: {
        type: DataTypes.STRING(128),
        allowNull: false,
        defaultValue: 'editors',
        comment: 'Role'
    },
    nickname: {
        type: DataTypes.STRING(128),
        allowNull: false,
        comment: 'Nickname'
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

module.exports = User;