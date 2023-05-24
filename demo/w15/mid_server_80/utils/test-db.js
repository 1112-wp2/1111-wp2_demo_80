const db = require('./database');

const testDB = async () => {
  try {
    const results = await db.query(`select * from menu_80`);
    console.log('All data', JSON.stringify(results.rows));
  }catch(error){
    console.log(error);
  }
  
}

testDB();

module.exports = testDB;