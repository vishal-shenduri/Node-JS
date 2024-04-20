const {format} = require("date-fns");
const {v4 : uuid} = require("uuid")


const fs = require("fs");
const fsPromises = require("fs/promises")
const path = require("path")

const logEvents = async (msg) => {
    dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    logItem = `${dateTime}\t${uuid()}\t${msg}\n`;
    console.log(logItem);
    try{
        if(!fs.existsSync(path.join(__dirname, "logs"))){
            fs.mkdirSync(path.join(__dirname, "logs"));
        }
        fsPromises.appendFile(path.join(__dirname,"logs","eventLog.log"),logItem);
    }catch (err){
        console.log(err);
    }
};

module.exports = logEvents;