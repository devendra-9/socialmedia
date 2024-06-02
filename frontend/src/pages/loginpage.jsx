import React, { useContext, useState } from 'react'
import {Allcontext} from '../context/allcontext'
import './css/logn.css'
import { useNavigate } from 'react-router-dom'

const loginpage = () => {

    const navigate = useNavigate()

    const {signin,signup} = useContext(Allcontext)

    const [active,isactive] = useState('signin')
    const handlelogin = (namee) =>
        {
            isactive(namee)
        }

    const [logindata,setlogindata] = useState({
        useremail:'',
        userpassword:''
    })

    const handlesignin = (e)=>
    {
        setlogindata({...logindata,[e.target.name]:e.target.value})   
    }

    const login = async () =>
    {
        if(logindata.useremail==='' || logindata.userpassword==='')
        {
            alert('Please fill all the required field')
        }
        else
        {
           let result = await signin(logindata)
           if(result)
            {
                navigate('/home')
            }
        }
    }



    const [signupdata,setsignupdata] = useState({
        useremail:'',
        username:'',
        userpassword:''
    })

    const handlesignin2 = (e)=>
    {
        setsignupdata({...signupdata,[e.target.name]:e.target.value})   
    }

    const newuser = async ()=>
    {
        if(signupdata.useremail==='' || signupdata.userpassword==='' || signupdata.username==='')
        {
            alert('all fields are mandatory')
        }
        else
        {
            const result2 = await signup(signupdata)
            if(result2)
            {
                navigate('/home')
            }
        }
    }

  return (
    <div className='loginpage'>
        <div className="login-head">
            <div className="loginheader">
                <div className={`signin ${active==='signin'?'active2':''}`}>
                    <div className="signin2">
                    <h1>Only Friends</h1>
                    <div className="signindetails">
                        <h2>Sign in</h2>
                        <h6>Please enter details to continue..</h6>
                        <label> Email: </label>
                        <input type="text" placeholder='Enter your Email' name='useremail' value={logindata.useremail} onChange={handlesignin}/>
                        <label>Password: </label>
                        <input type="password" placeholder='Enter your Passwrd' name='userpassword' value={logindata.userpassword} onChange={handlesignin}/>
                        <button onClick={()=>login()}>Sign in</button>
                        <p><span onClick={()=>handlelogin('signup')}>Create Account</span></p>
                    </div>
                    </div>
                </div>
                <div className={`signup ${active==='signup'?'active2':''}`}>
                    <div className="signup2">
                <h1>Only Friends</h1>
                    <div className="signindetails">
                        <h2>Sign Up</h2>
                        <h6>Please enter details to continue..</h6>
                        <label> Email: </label>
                        <input type="text" placeholder='Enter your Email' name='useremail' value={signupdata.useremail} onChange={handlesignin2}/>
                        <label> Name: </label>
                        <input type="text" placeholder='Enter your Name' name='username' value={signupdata.username} onChange={handlesignin2}/>
                        <label>Password: </label>
                        <input type="password" placeholder='Enter your Passwrd' name='userpassword' value={signupdata.userpassword} onChange={handlesignin2}/>
                        <button onClick={()=>newuser()}>Sign up</button>
                        <p><span onClick={()=>handlelogin('signin')}>Sign In  / Login</span></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="images">
                <img src="/Friendship-Wallpapers.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default loginpage