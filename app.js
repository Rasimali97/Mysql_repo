const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

let connection = mysql.createConnection({
  host: "boovkxtqcqckqxmiesaa-mysql.services.clever-cloud.com",
  user: "ue1klfzskuwvozwt",
  password: "2BIBqbc36V8rzWHlJcec",
  database: "boovkxtqcqckqxmiesaa",
});

app.get("/users", function (req, res) {
  connection.query("select * from users", function (err, result, fields) {
    res.send(result);
  });
});

app.get("/users/:id", (req, res) => {
  const elem = req.params;
  connection.query("select * from users", function (err, result, fields) {
    for (let i = 0; i < result.length; i++) {
      if (elem.id == result[i].ID) {
        res.send(result[i]);
      }
    }
  })
})
app.delete("/users/:id", (req, res) => {
  const elem = req.params.id;

  connection.query(
    `DELETE FROM users WHERE ID=${elem}`,
    function (err, result, fields) {
      console.log(result);
      res.send(result);
    }
  );
});

app.post("/users/", (req, res) => {
  let obj = req.body;
  console.log(obj);
  connection.query(
    `INSERT INTO users (ID, Lastname, Firstname, Passwords) VALUES ("${obj.ID}", "${obj.Lastname}", "${obj.Firstname}", "${obj.Passwords}")`,
    function (err, result, fields) {
      res.send(result);
    }
  );
});

  // connection.query("select * from users", function (err, result, fields) {
  //   console.log(result);
    // res.send(result);
  // });


app.listen(process.env.PORT || 3000);