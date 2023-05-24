const db = require('./database');

const test = async () => {
  let data = await db.query('select * from card_xx');
  console.log('test data', JSON.stringify(data.rows));
};

test();
