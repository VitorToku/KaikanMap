const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user: "root",   
  

    database:"kaikanmap",
    password:""
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
app.get("/listaEventos",(req,res) =>{
    const q = "select * from eventos";
    db.query(q,(err,result)=>{
        if (err) console.log(err)
        else res.send(result)
    })
})

app.get("/eventos/:id",(req,res) =>{    
    const q = `select e.*, k.NomeKaikan from eventos e, listakaikans k where k.id = (select KaikanResponsavel from eventos where id = ${req.params.id} ) AND e.id = ${req.params.id}`
    db.query(q,(err,result)=>{
        if (err) console.log(err)
        else res.send(result)
    })
})

app.post("/registro", (req,res) =>{
    const Bairro = req.body.Bairro;
    const CEP = req.body.CEP;
    const Cidade = req.body.Cidade;
    const Descricao = req.body.Descricao;
    const Email = req.body.Email;
    const Estado = req.body.Estado;
    const NomeLocal = req.body.NomeLocal;
    const Numero = req.body.Numero;
    const Rua = req.body.Rua;
    const Senha = req.body.Senha;
    const Imagem = "../../img/kaikan_cipo.png"

    const q = "insert into listakaikans(NomeKaikan,Rua,Numero,Bairro,Cidade,Estado,CEP,DescricaoCompleta,imagem,Email,Senha) values (?,?,?,?,?,?,?,?,?,?,?);"
    db.query( q, [NomeLocal,Rua,Numero,Bairro,Cidade,Estado,CEP,Descricao,Imagem,Email,Senha],(err,result)=>{
        console.log(err)
    })
})

app.post("/registroEvento", (req,res) =>{
    const {NomeEvento} = req.body;
    const {LocalEvento} = req.body;
    const imagem = "../../img/kaikan_cipo.png";
    const {Descricao} = req.body;
    const {Data} = req.body;
    const {Hora} = req.body;
    const {KaikanResponsavel} = req.body;
    const DiaEHora = Data + " " + Hora + ":00";


    const q = "insert into eventos(NomeEvento,LocalEvento,KaikanResponsavel,imagem,Descricao,DiaEHora) values(?,?,?,?,?,?)"
    db.query( q, [NomeEvento,LocalEvento,KaikanResponsavel,imagem,Descricao,DiaEHora],(err,result)=>{
        console.log(err)
    })
})

app.post("/login",(req,res)=>{
    const {Email} = req.body;
    const {Senha} = req.body;
    
    console.log(Email)
    console.log(Senha)

    const q = "select Senha from listakaikans where Email = ?"
    db.query(q, [Email],(err,result)=>{   
        if(result[0].Senha == Senha){res.send({Sucesso: true})}         
    })
})

app.listen(3001, () =>{
    console.log("Rodando Servidor")
});