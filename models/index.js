require('./category');
require('./filter');
require('./product');
require('./user');
require('./userinfo');

const Sequelize = require('./db');

// 同步所有数据表模型
Sequelize.sync({
    alter: true
}).then(() => {
    console.log('Synchronize all models');
})