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
    userpassword:'String',
    userbio:'String',
    userprofilepic:'String'
})
 
const user = mongoose.model('user',Userdata)

module.exports = {user}