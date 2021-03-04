const { DataTypes } = require('sequelize');

const Sequelize = require('./db');

//定义用户信息表，保存用户提交的信息
const Userinfo = new Sequelize('userinfo',{
    username: {
        type: DataTypes.STRING(128),
        allowNull: false,
        comment: 'username'
    },
    email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        comment: 'user Email'
    },
    other: {
        type: DataTypes.STRING(128)
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

module.exports = Userinfo;