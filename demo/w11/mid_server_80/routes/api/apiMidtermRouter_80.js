var express = require('express');
var router = express.Router();

const db = require('../../utils/database');

router.get('/menu_80', async function (req, res, next) {
    try {
        let results = await db.query(`select * from menu_80`);
        // console.log('data', JSON.stringify(results.rows));  
        // console.log('data2', JSON.stringify(results2.rows));
        res.json(results.rows);
      } catch (error) {
        console.log(error);
      }
    });

router.get('/menu_80/:category', async function (req, res, next) {
    try {
        let results = await db.query(`select * from menu_80 where category = $1`, [
            req.params.category,
          ]);
        // console.log('data', JSON.stringify(results.rows));  
        // console.log('data2', JSON.stringify(results2.rows));
        res.json(results.rows);
      } catch (error) {
        console.log(error);
      }
    });


module.exports = router;
