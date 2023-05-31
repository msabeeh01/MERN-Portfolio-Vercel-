var express = require('express');
var router = express.Router();

const { getImageById } = require('../controllers/getImage');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', getImageById);


module.exports = router;
