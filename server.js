const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const app = express();

//配置静态资源文件
app.use(express.static(path.resolve(__dirname,'./public')));

app.listen(process.env.SERVER_PORT,process.env.SERVER_HOST,() => {
    console.log('start serve!');
})