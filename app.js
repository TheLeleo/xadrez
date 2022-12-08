import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
app.use(cors({origin:"*"}));
app.use(bodyParser.json());

var vencedor;

app.post("/vencedor", (req, res) => {
    vencedor = req.body;
    res.json("recebido");
});

app.get("/vencedor", (req, res) => {
    res.json(vencedor);
});

console.log(vencedor)
app.listen(3008, () =>{
    console.log("http://localhost:3008");
});
