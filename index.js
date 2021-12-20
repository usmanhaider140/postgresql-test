const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "usmandb",
});

// client
//   .connect()
//   .then(() => {
//     console.log("connected Successfully");
//   })
//   .then(() => {
//     client.query('select 1+1 as "total"')
//   })
//   .then((result) => {
//     console.table(result.rows);
//   })
//   .catch((e) => console.error(e))
//   .finally(() => {
//     client.end();
//   });

const makeConnection = async () => {
  await client.connect();
  console.log("connected Successfully");
  const query = await client.query('select 1+1 as "total"');
  console.log(query);
};

makeConnection();
