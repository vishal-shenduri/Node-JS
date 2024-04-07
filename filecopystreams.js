const fs = require("fs");
const path = require("path");

rs = fs.ReadStream(path.join(__dirname, "hello.txt"), 'utf-8');

ws = fs.WriteStream(path.join(__dirname, "stream-hello.txt"));

rs.on('data', (datachunks)=>{
    ws.write(datachunks);
})

process.on('uncaughtException', err => {
    console.error(`There was a uncaughtexception ${err}`);
    process.exit(1);
})