const express = require('express')
const app = express()

const cors = require('cors');

app.use(cors())
app.use(express.json())


const users = [
    {id: 1, name: "Shabana", email: "shabana@gmail.com"},
    {id: 2, name: "shabnoor", email: "shabnoor@gmail.com"},
    {id: 3, name: "sabila", email: "sabila@gmail.com"},
    {id: 4, name: "sujana", email: "sujana@gmail.com"},
    {id: 5, name: "Shunita", email: "shunita@gmail.com"}
]
const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
res.send('users management server is running')
})

app.get('/users', (req, res)=>{
    res.send(users)
})

app.post('/users', (req, res)=>{
    console.log("post api hitting")
    console.log(req.body)
    const newUser = req.body 
    newUser.id = users.length + 1 
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () =>{
    console.log(`server is running on PORT: ${port}`)
})