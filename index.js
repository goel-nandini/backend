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
    })
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})