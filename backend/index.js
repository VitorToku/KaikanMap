const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "testecrud1234",
    database:"kaikanmap",
});


app.get("/teste", (req, res) => {    
    const q = "SELECT * FROM listakaikans";
    db.query(q,(err,result) =>{
        if (err) console.log(err)
        else res.send(result)
    })
});

app.get("/listaKaikans",(req,res)=>{
    const q = "select id, Nomekaikan, DescricaoCompleta from listakaikans;";
    db.query(q,(err,result) =>{
        if (err) console.log(err)
        else res.send(result)
    })
})

app.listen(3001, () =>{
    console.log("Rodando Servidor")
});