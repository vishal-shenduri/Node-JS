const { constants } = require("buffer")
const express = require("express")
const fs = require("fs")

const app = express()

function loglines(reqmethod, reqpath) {
    const log = `${Date.now()}: ${reqmethod} on ${reqpath}request received\n`;
    fs.appendFile("url-path.log", log, () => {})
}


app.get("/", (req, res) => {
    res.end("Homepage");
    loglines(req.method,req.path);
})

app.get("/about", (req, res) => {
    if (req.query.name){
        res.end(`Hello I am ${req.query.name}`);
    }
    else{
        res.end("Hello World!!")
    }
    loglines(req.method,req.path);
})

app.get("/*", (req, res) => {
    res.end("Page not found")
    loglines(req.method,req.path);
})

app.listen(8000, () => console.log("server started"))