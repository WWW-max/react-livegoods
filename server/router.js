const Mock = require('mockjs');
const express = require('express');
const router = express.Router();

// 测试接口
router.get('/', (req, res) => {
    res.send('测试成功！');
})
// 获取首页轮播图接口
router.get('/banner', (req,res) => {
    const data = Mock.mock({
        status:200,
        'banner|3': [{
            'id|+1':1,
            'imgUrl|+1': [
                'http://iwenwiki.com/api/livable/banner/banner1.png',
                'http://iwenwiki.com/api/livable/banner/banner2.png',
                'http://iwenwiki.com/api/livable/banner/banner3.png'
            ]
        }]
    })
    res.send(data);
})

module.exports = router;