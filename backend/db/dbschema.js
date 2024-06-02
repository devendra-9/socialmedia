const mongoose = require('mongoose')

const connurl = 'mongodb+srv://admin:admin123@cluster0.cxvzrpo.mongodb.net/friends'
const conn = mongoose.connect(connurl)
if(conn)
{
    console.log("connected Succcessfully")   
}

const Userdata = new mongoose.Schema({
    useremail:
    {
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    userpassword:
    {
        type:String,
        required:true
    },
    userbio:{
        type:String,
        required:true
    },
    userprofilepic:
    {
        type:String,
        required:true
    }
})
const postsdata = new mongoose.Schema({
    
})
 
const user = mongoose.model('user',Userdata)

module.exports = {user}