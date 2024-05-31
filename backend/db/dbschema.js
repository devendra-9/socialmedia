const mongoose = require('mongoose')

const connurl = 'mongodb+srv://admin:admin123@cluster0.cxvzrpo.mongodb.net/friends'
const conn = mongoose.connect(connurl)
if(conn)
{
    console.log("connected Succcessfully")   
}

const Userdata = new mongoose.Schema({
    useremail:'String',
    username:'String',
    password:'String',
    bio:'String',
    profilepic:'String'
})

