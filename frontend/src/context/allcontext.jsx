import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Allcontext = createContext(null)

const Allcontextprovider = (props) =>
    {

        const signin = async (logindata) =>
        {
            const response = await fetch('http://localhost:4000/user/signin',{
                method:'POST',
                headers:
                {
                    Accept:'application/form-data',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(logindata)
            })
             const data = await response.json()
             console.log(data.success)
             if(data.success)
            {
                localStorage.setItem('token',data.token)
                return true;
            }
            else
            {
                alert('something went wrong')
            }
            
        }


        const signup = async (signupdata)=>
        {
            const response = await fetch('http://localhost:4000/user/signup',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(signupdata)
            })
            const data = response.json();
            if(data.success)
            {
                localStorage.setItem('token',data.token)
                return true;

            }
            else
            {
                return false
            }
        }





        const contextvalue = {signin,signup}

        return(
        <Allcontext.Provider value={contextvalue}>
            {props.children}
        </Allcontext.Provider>
        )
    }
export default Allcontextprovider