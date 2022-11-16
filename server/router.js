const Mock = require('mockjs');
const express = require('express');
const router = express.Router();
const citys = require('./data/city/data.json');
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
/**
 * 获取热门房源接口
 * 参数： {city:'北京'}
 */
router.get('/hothouse', (req, res) => {
    let city = req.query.city || '北京';
    res.send(Mock.mock({
        status: 200,
        'list|5': [
            {
                'id|+1': 1,
                address: city + '-@cword(3,8)',
                'huxing|1': ['一室一厅', '两室一厅', '三室两厅'],
                'type|1': ['整租', '合租'],
                'price|2000-10000': 1, // 价格
                'imgUrl|1': [
                    'http://iwenwiki.com/api/livable/shop/z1.jpg',
                    'http://iwenwiki.com/api/livable/details/2.jpg',
                    'http://iwenwiki.com/api/livable/shop/z2.jpg',
                    'http://iwenwiki.com/api/livable/details/4.jpg',
                    'http://iwenwiki.com/api/livable/shop/z3.jpg',
                    'http://iwenwiki.com/api/livable/details/6.jpg',
                ]
            }
        ]
    }))
})
/**
 * 
 */
router.get('/selectCity', (req, res) => {
    res.send({
        status: 200,
        data: citys
    })
});
module.exports = router;