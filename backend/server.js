const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite"); 
const app = express();

sqlite3.verbose();

const db = open({
    filename: "Database.db",
    driver: sqlite3.Database
});


app.listen(3000, ()=> console.log("Server is running on port 3000"));