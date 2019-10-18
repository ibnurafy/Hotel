var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let data = {
    layout: 'frontend',
    title: 'Hotel Abadi'
  };
  res.render('index', data);
});

router.get('/login', function (req, res, next) {
  let login = {}
  res.render('login');
});

module.exports = router;

var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hotel', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established succesfully");
});

const kamar = mongoose.model('kamar', {
  nomor: String,
  lantai: String,
  fasilitas: [String]
});

/* GET home page. */
router.get('/', function (req, res, next) {
  let data = {
    layout: 'frontend',
    title: 'HOTEL'
  };

  router.get('/kamar/add', function (req, res, next) {
    let data = kamar.find((err, kamar) => {
      res.send(kamar);
    });
  });

  router.get('/kamar', function (req, res, next) {
    kamar.find((err, kamar) => {
      res.status(200).send(kamar)
    });
  });

  router.get('/kamar', function (req, res, next) {
    kamar.kamar = new kamar({
      nomor: "001",
      lantai: 1,
      fasilitas: [
        "TV", "AC", "kulkas"
      ]
    });
    kamar.save();
    res.status(200).send(kamar);
  });

  res.render('index', data);
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.get('/admin', function (req, res, next) {
  res.render('admin');
});

module.exports = router;


