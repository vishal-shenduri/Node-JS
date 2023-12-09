const express = require("express")
const Users = require('./MOCK_DATA.json')
const fs = require("fs")

app = express();
const port = 8000;

app.use(express.urlencoded({extended : false}));

app.get("/users", (req, res) => {
    const html = `
        <ul>
            ${Users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>`

    res.send(html)
});

app.get("/api/users",(req, res) => {
    return res.json(Users);
})
.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = Users.find((user)=> user.id === id);
    return res.json(user)
})
.post("/api/users", (req, res) => {
    const body = req.body;
    Users.push({...body, id: Users.length+1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(Users), (err,data)=>{
        return res.json({status : "success", id : Users.length});
    });
})
.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = Users.find((user) => user.id === id);
    if (user) {
        Users.splice(Users.indexOf(user), 1);
      }
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(Users), (err,data)=>{
        return res.json({status : "success", id : `${id} removed`})
    })
})
.patch("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    try {
        const user = Users.find((user) => user.id === id);
        if (user) {
            for (const [key, value] of Object.entries(body)) {{
                    user[key] = value;
            }
      }
      fs.writeFile('./MOCK_DATA.json', JSON.stringify(Users), (err,data)=>{
        return res.json({status : "success", id : `${id} updated`})
        })
      }} 
      catch (err) {
        console.log(err)
        return res.json({status:"Fail", id : `${err}`});
      }
})

app.listen(port, ()=> {console.log(`Server Started at port ${port}`)});

