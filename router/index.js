const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
})

router.get('/about', (req, res, next) => {
    res.render('about');
})

router.get('/contact', (req, res, next) => {
    res.render('contact');
})

router.get('/post', (req, res, next) => {
    res.render('post');
})


module.exports = router;