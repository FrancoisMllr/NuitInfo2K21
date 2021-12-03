const path = require('path');
const express = require('express');
const port = Process.env.PORT || 3001;

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


app.get("/utilisateurs", (req, res) => {
  pool.query(`SELECT * FROM utilisateurs;`, (err, data) => {
    if (err) {
        console.log("Error - Failed to select all from Users");
        console.log(err);
    }
    else{
        console.log(data.rows);
        data.rows.forEach(element => {
          element.datasefrom = "Utilisateur"
        });
        res.json(data.rows);
    }
  });
});


app.post("/utilisateurs/:nom", (req, res) => {
  requeteSQL = "INSERT INTO utilisateurs(nom) VALUES('" + req.params.nom + " ')"
  pool.query(requeteSQL, (err, data) => {
    if (err) {
        console.log("Error - Failed to select all from Users");
        console.log(err);
    }
    else{
        console.log("Utilisateur ajouté avec succés");
    }
  });
});


app.get("/sauveteurs", (req, res) => {
  pool.query(`SELECT * FROM sauveteurs WHERE verif = true;`, (err, data) => {
    if (err) {
        console.log("Error - Failed to select all from Users");
        console.log(err);
        res.json("Error - Failed to select all from Users")
       
    }
    else{
        console.log(data.rows);
        data.rows.forEach(element => {
          element.datasefrom = "Sauveteur"
        });
        res.json(data.rows);
    }
  });
});


app.post("/sauveteurs/:nom/:prenom", (req, res) => {
  requeteSQL = "INSERT INTO sauveteurs(nom, prenom) VALUES('" + req.params.nom + "', '" + req.params.prenom + " ')"
  pool.query(requeteSQL, (err, data) => {
    if (err) {
        console.log("Error - Failed to select all from Users");
        console.log(err);
        res.json("Error - Failed to select all from Users")
    }
    else{
        console.log("Utilisateur ajouté avec succés");
        res.json("Utilisateur ajouté avec succés")

    }
  });
});


app.get("/admin/verif", (req, res) => {
  pool.query(`SELECT * FROM sauveteurs WHERE verif = false;`, (err, data) => {
    if (err) {
        console.log("Error - Failed to select all from Users");
        console.log(err);
        res.json("Error - Failed to select all from Users")
       
    }
    else{
        // console.log(data.rows);
        // data.rows.forEach(element => {
        //   element.datasefrom = "Sauveteur"
        // });
        res.json(data.rows);
    }
  });
});



// Route pour valider l'ajout d'une personne de la part d'un membre de la communauté
app.put("/admin/verif/valider/:idpersonne", (req, res) => {
  requete = "UPDATE sauveteurs SET verif = true WHERE id = '" + req.params.idpersonne + "'"
 
  pool.query(requete, (err, data) => {
    if (err) {
        console.log("Error - Failed to select all from Users");
        console.log(err);
        res.json("Error - Failed to select all from Users")
       
    }
    else{
      res.json("Cette demande a bien été acceptée");

    }
  });
});


// Route pour rejeter l'ajout d'une personne de la part d'un membre de la communauté
app.put("/admin/verif/rejeter/:idpersonne", (req, res) => {
  requete = "DELETE FROM sauveteurs WHERE id = '" + req.params.idpersonne + "'"
  pool.query(requete, (err, data) => {
    if (err) {
        console.log("Error - Failed to select all from Users");
        console.log(err);
        res.json("Error - Failed to select all from Users")
    }
    else{
        res.json("Cette demande a bien été rejetée");
    }
  });
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});