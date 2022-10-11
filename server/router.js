const express = require('express');
const router = express.Router();

// 测试接口
router.get('/', (req, res) => {
    res.send('测试成功！');
})

module.exports = router;