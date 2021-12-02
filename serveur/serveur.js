const path = require('path');
const express = require('express');

const PORT = 3001;

const app = express();
const {Pool} = require("pg");

app.use(express.static(path.resolve(__dirname, '../client/build')));


// Connection à PG
const pool = new Pool({
    user: 'qsusembbvstvbj',
    host: 'ec2-54-228-139-34.eu-west-1.compute.amazonaws.com',
    database: 'da5kr6i6tno0nl',
    password: 'ff18012a0c87779593979b6cf3301a579c879df04492e5646173f7db44d86933',
    port: 5432,
 ssl: {
    rejectUnauthorized: false
 }
});

pool.query(`SELECT * FROM utilisateurs;`, (err, res) => {
    if (err) {
        console.log("Error - Failed to select all from Users");
        console.log(err);
    }
    else{
        console.log(res.rows);
    }
});


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});



app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});