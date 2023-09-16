const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

let connection = mysql.createConnection({
  host: "boovkxtqcqckqxmiesaa-mysql.services.clever-cloud.com",
  user: "ue1klfzskuwvozwt",
  password: "2BIBqbc36V8rzWHlJcec",
  database: "boovkxtqcqckqxmiesaa",
});

connection.query("select * from socialmedia", function (err, result, fields) {
  
  app.get("/", function (req, res) {
    res.send(result);
  });
});


app.get("/:id", (req, res) => {
  const elem = req.params;
  
  connection.query("select * from socialmedia", function (err, result, fields) {
   
    for (let i = 0; i < result.length; i++) {
      if (elem.id == result[i].PersonID) {
        res.send(result[i]);
      }
    }
  });
});
// delete method
app.delete("/socialmedia/:id", (req, res) => {
  const elem = req.params.id;
  const silininenElementArray = db.filter(
    (element) => element.actor_id != elem
  );
  connection.query(
    `DELETE FROM socialmedia WHERE ID=${elem}`,
    function (err, result, fields) {
      console.log(result);
    }
  );
});

// post method
app.post("/socialmedia/", (req, res) => {
  let obj = req.body;
  console.log(obj);
  connection.query(
    `INSERT INTO socialmedia (ID, FirstName , LastName)
    VALUES ("${obj.ID}","${obj.FirstName}", "${obj.LastName}")`,
    function (err, result, fields) {
      app.get("/socialmedia", function (req, res) {
        res.send(result);
      });
    }
  );
});

app.listen(process.env.PORT || 3000);
