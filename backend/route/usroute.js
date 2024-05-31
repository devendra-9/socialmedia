const Router = require('express')
const route = Router();
const jwt = require('jsonwebtoken')
const {user} = require('../db/dbschema')
const {JWT} = require('../config')

//------------------------------signin page------------------------------

route.post('/signin',async(req,res)=>{
    const useremail = req.body.email;
    const userpassword = req.body.userpassword;
    const finduser = await user.findOne({
        useremail
    })
    if(finduser)
    {
        const passcompare = userpassword===finduser.userpassword
        if(passcompare)
            {
                const token = jwt.sign({
                    useremail
                },JWT)   

                localStorage.setItem('token',token)

                res.json({
                    success:true,
                    msg:'Signed in successfully'
                })
            }
        else
            {
                res.json({
                    success:false,
                    msg:'Invalid credentials'
                })
            }
    }
    else
    {
        res.json
        ({
            success:false,
            msg:'No such email found'
        })
    }
})

//---------------------------end of signin page--------------------------





//------------------------------signup page------------------------------

route.post('/signup',async(req,res)=>{
    const useremail = req.body.useremail;
    const username = req.body.username;
    const userpassword = req.body.password;
    const finduser = await user.findOne({
        useremail
    })
    if(finduser)
    {
        res.json({
            success:false,
            msg:'user already exist try login'
        })   
    }
    else
    {
        const createuser = await user.create({
            useremail,
            username,
            userpassword
        })
        if(createuser)
        {
            res.json
            ({
                success:true,
                msg:'successfully signed up'
            })
            const token = jwt.sign({
                useremail
            },JWT)

            localStorage.setItem('token',token)

        }
        else
        {
            res,json({
                success:false,
                msg:'Something went wrong'
            })
        }
    }
})

//---------------------------end of signup page--------------------------

module.exports = route;