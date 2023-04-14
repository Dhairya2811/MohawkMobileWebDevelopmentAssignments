const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite"); 
const cors = require('cors');
const app = express();
const redis = require("redis");
const client = redis.createClient();

sqlite3.verbose();

const db = open({
    filename: "Database.db",
    driver: sqlite3.Database
});

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Include");
  next();
});

app.use(express.json());

app.post("/login", async (req, res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var sql = `
        SELECT * FROM user WHERE username = ? AND password = ?
    `;
    params = [username, password];
    (await db).all(sql, params)
    .then(data => {
        if(data.length == 0){
            res.json({status: "failure"});
        }else{
            res.json({status: "success"});
        }
    });
});

app.post("/signup", async (req, res)=>{
    var sql = `
        INSERT INTO user (username, password) VALUES (?, ?)
    `;
    var username = req.body.username;
    var password = req.body.password;
    (await db).run(sql, [username, password]);
    res.json({status: "success"});
});

app.post("/update", async (req, res)=>{
    if(!client.isOpen){
        client.connect();
    }
    var username = req.body.username;
    var result = req.body.result;
    var winners = JSON.parse(await client.get("winners"));
    if(result == "correct"){
        if(winners.length == 10){
            winners.shift()
        }
        winners.push(""+username);
        await client.set("winners", JSON.stringify(winners));
    }
    res.json( JSON.parse(await client.get("winners")).reverse());
});

process.on('SIGINT', () => {
    client.quit();
    process.exit();
  });
  

app.listen(3000, 
    () => 
        console.log("Server is running on port 3000")
);