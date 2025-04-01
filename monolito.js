const express = require("express")
const app = express()

app.use(express.json())

let orders = []
let.users = []

app.post("/orders", (req, res) =>{
    const order = req.body;
    orders.push(order)
    res.send({message: "Pedido cadastrado com sucesso", order})
})

app.post("/users", (req, res) =>{
    const user = req.body;
    orders.push(user)
    res.send({message: "Usuário cadastrado com sucesso", user})
})

app.get ("/orders", (req, res) =>{
    res.send({orders})
})

app.get ("/users", (req, res) =>{
    res.send({users})
})

app.listen(3000, () => console.log("Servidor ,onolitico ok, na porta 3000"))