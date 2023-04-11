const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite"); 
const app = express();

sqlite3.verbose();

const db = open({
    filename: "Database.db",
    driver: sqlite3.Database
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/login", (req, res)=>{
    res.send("Log in request.");
});

app.get("/signup", (req, res)=>{
    res.send("Sign up request.");
});

app.listen(3000, 
    () => 
        console.log("Server is running on port 3000")
);