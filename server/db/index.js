const pg = require('pg');
const client = new pg.Client({
  user: 'salamander',
  database: 'nototrader'
});

client.connect();

client.query('create table if not exists items(id serial primary key, text varchar(40) not null, complete boolean)', (err, results) => {
  console.log(err ? err : 'Connected to DB');
});

module.exports = client;