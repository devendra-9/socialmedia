import { createContext, useState } from "react";

export const Allcontext = createContext(null)

const Allcontextprovider = (props) =>
    {
        const [result,setresult] = useState({})
        const signin = async (logindata) =>
        {
            await fetch('http://localhost:4000/user/signin',{
                method:'POST',
                headers:
                {
                    Accept:'application/form-data',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(logindata)
            })
            .then((response)=>response.json())
            .then((data)=>{
                if(data.success)
                {
                    setresult(data)
                    console.log(result)
                    return result
                }
                else
                {
                    setresult(data)
                    console.log(result)
                    return result
                }
            })
        }


        const signup = async (signupdata)=>
        {
            await fetch('http://localhost:4000/user/signup',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(signupdata)
            })
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data.success)
            })
        }





        const contextvalue = {signin,signup}

        return(
        <Allcontext.Provider value={contextvalue}>
            {props.children}
        </Allcontext.Provider>
        )
    }
export default Allcontextprovider