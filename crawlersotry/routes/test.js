var express = require('express');
var router = express.Router();
var novelThief=require('../lib/novelThief');
var novelAuto=require('../lib/novelAuto');

router.get('/', function(req, res, next) {
    novelAuto.getAllNovel();
    res.send('正在读取数据');
});

module.exports = router;

