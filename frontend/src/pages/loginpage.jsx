import React, { useState } from 'react'
import './css/logn.css'

const loginpage = () => {

    const [active,isactive] = useState('signin')
    const handlelogin = (namee) =>
        {
            isactive(namee)
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
                        <input type="text" placeholder='Enter your Email'/>
                        <label>Password: </label>
                        <input type="password" placeholder='Enter your Passwrd'/>
                        <button>Sign in</button>
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
                        <input type="text" placeholder='Enter your Email'/>
                        <label> Name: </label>
                        <input type="text" placeholder='Enter your Name'/>
                        <label>Password: </label>
                        <input type="password" placeholder='Enter your Passwrd'/>
                        <button>Sign up</button>
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