var express = require('express');
var router = express.Router();

const db = require('../../utils/database');

router.get('/', async function (req, res, next) {
    try {
        let results = await db.query(`select * from menu_80`);
        // console.log('data', JSON.stringify(results.rows));  
        // console.log('data2', JSON.stringify(results2.rows));
        res.json(results.rows);
      } catch (error) {
        console.log(error);
      }
})

module.exports = router;