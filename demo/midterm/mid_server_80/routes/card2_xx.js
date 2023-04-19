var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const results = await db.query(`select * from card_xx`);
    // console.log('json data', JSON.stringify(results.rows));
    res.render('card2_xx/index', { data: results.rows, name: 'Hsingtai Chung', id: '123456789' });
  }catch(error){
    console.log(error);
  }

  
});

module.exports = router;