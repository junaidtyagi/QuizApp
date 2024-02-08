const express = require('express');
const router =  new express.Router();
const controller = require('../controller/Getdata')

router.get('/quiz/getquestion',controller.getData)
router.post('/quiz/questions',controller.postData)

module.exports = router;