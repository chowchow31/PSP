var express = require('express');
var router = express.Router();
const path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.sendFile('/views/index.html', {root: path.join(__dirname, '../')})
  res.render('index', { title: 'PSP' });
});

router.get('/1', function(req, res, next) {
  //res.sendFile('/views/index.html', {root: path.join(__dirname, '../')})
  res.render('index1', { title: 'PSP' });
});

router.get('/2', function(req, res, next) {
  //res.sendFile('/views/index.html', {root: path.join(__dirname, '../')})
  res.render('index2', { title: 'PSP' });
});

router.get('/3', function(req, res, next) {
  //res.sendFile('/views/index.html', {root: path.join(__dirname, '../')})
  res.render('index3', { title: 'PSP' });
});

router.get('/4', function(req, res, next) {
  //res.sendFile('/views/index.html', {root: path.join(__dirname, '../')})
  res.render('index4', { title: 'PSP' });
});

router.get('/5', function(req, res, next) {
  //res.sendFile('/views/index.html', {root: path.join(__dirname, '../')})
  res.render('index5', { title: 'PSP' });
});

router.get('/page4', function(req, res, next) {
  res.sendFile('/views/page4.html', {root: path.join(__dirname, '../')})
});

router.get('/page5', function(req, res, next) {
  res.sendFile('/views/page5.html', {root: path.join(__dirname, '../')})
});


router.get('/smt', function(req, res, next) {
  //res.sendFile('/views/smt.html', {root: path.join(__dirname, '../')})
  res.render('smt', { title: 'PSP' });
});

module.exports = router;
