const fsPromises = require("fs/promises")
const path = require('path');

const fileOps = async () => {
    try{
        data = await fsPromises.readFile(path.join(__dirname, "hello.txt"), 'utf-8');
        console.log(data);
        fsPromises.writeFile(path.join(__dirname, "new-hello.txt"), data);
        fsPromises.appendFile(path.join(__dirname, "new-hello.txt"), "\n\n Nice to meet you!!");
        fsPromises.unlink(path.join(__dirname, "hello.txt"));
        fsPromises.rename(path.join(__dirname, "new-hello.txt"),path.join(__dirname, "hello.txt"));
    }catch (err) {
        console.log (`There was an exception ${err}`);
    }
}

fileOps();