const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "hello.txt"), 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
    fs.writeFile(path.join(__dirname, "new-hello.txt"), data, (err)=>{
        if(err) throw err;
        console.log("New file created!")
        fs.appendFile(path.join(__dirname, "new-hello.txt"), "\n\n Nice to meet you!!", (err)=> {
            if(err) throw err;
            console.log("Appended to new file!")
            fs.unlink(path.join(__dirname, "hello.txt"), (err)=>{
                if(err) throw err;
                console.log("hello.txt deleted!")
                fs.rename(path.join(__dirname, "new-hello.txt"),path.join(__dirname, "hello.txt"),(err)=>{
                    if(err) throw err;
                    console.log("new-hello.txt renamed to hello.txt!")
                })
            })
        })
    })
});

console.log("hello")

process.on('uncaughtException', err => {
    console.error(`There was a uncaughtexception ${err}`);
    process.exit(1);
})