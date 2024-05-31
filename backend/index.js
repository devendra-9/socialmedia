const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const cors = require('cors')
app.use(cors());
app.use(cookieparser())
app.use(bodyparser.json())
const LocalStorage = require('node-localstorage').LocalStorage
const localstorage = new LocalStorage('./token')
const port = 4000;
const userlink = require('./route/usroute')
app.use('/user',userlink)
app.listen(port,()=>{
    console.log("Listening to port 4000")
})