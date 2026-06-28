//to get env
require('dotenv').config()
//to bring express 
const express = require('express');
// create and expose https server
const port =3000
const app = express();
app.get('/',(req,res) => 
{ 
    res.send('Hello World!')
})
app.get('/nandini',(req,res) => 
    { 
        res.send('nandini this side!')
    });
app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "this is a joke"
        },
        {
            id: 2,
            title: "A joke",
            content: "this is a joke"
        },
        {
            id: 3,
            title: "A joke",
            content: "this is a joke"
        },
        {
            id: 4,
            title: "A joke",
            content: "this is a joke"
        },
        {
            id: 5,
            title: "A joke",
            content: "this is a joke"
        }
    ]
        res.json(jokes)
    });
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
