const fs = require("fs");
const path = require("path");

if(!fs.existsSync(path.join(__dirname, "hello"))){
    fs.mkdirSync(path.join(__dirname, "hello"), (err) => {
        console.log (`There was a exception ${err}`)
    })
}

if(fs.existsSync(path.join(__dirname, "hello"))){
    fs.rm(path.join(__dirname, "hello"), { recursive: true, force: true }, (err)=>{
        console.log (`There was a exception ${err}`)
    })
}