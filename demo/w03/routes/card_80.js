var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('card_80/index', { name: 'Pocheng Chu' , id: '208410380' });
});

module.exports = router;
