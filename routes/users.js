var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let data = {
    layout: 'frontend',
    title: 'HOTEL'
  };
  res.render('index', data);
});

router.get('/login', function (req, res, next) {
  let login = {}
  res.render('login');
});

router.get('/admin', function (req, res, next) {
  let login = {}
  res.render('admin');
});

module.exports = router;


