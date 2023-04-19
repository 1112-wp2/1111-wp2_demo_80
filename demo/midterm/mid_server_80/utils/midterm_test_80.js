const db = require('./database');

const testDB = async () => {
    try {
    let results1 = await db.query(`select * from menu_80`);
    console.log('json data', JSON.stringify(results1.rows));
  } catch (error) {
    console.log(error);
  }
};

testDB();

module.exports = testDB;
