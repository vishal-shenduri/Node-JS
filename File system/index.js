const { error } = require("console");
const fs = require("fs");
const http = require("http")
const  url = require("url")


const Myserver = http.createServer((req, res)=>{
    if (req.url === "/favicon.ico") return res.end();
    const Myurl = url.parse(req.url, true);
    const log = `${Date.now()}: ${Myurl.pathname} request received\n`;
    fs.appendFile("url-path.log", log, (error, data)=> {
        switch(Myurl.pathname){
            case "/":
                res.end("Homepage");
                break;
            case "/about":
                const username = Myurl.query.myname;
                res.end(`Hello I am ${username}`);
                break;
            default:
                res.end("not found");
        }
    })
});
Myserver.listen(8000, ()=> console.log("server started"));