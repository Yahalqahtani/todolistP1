import axios from 'axios'
import React,{useState} from 'react'


export default function Login() {
    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   

    const LoginFun =(e) =>{
     e.preventDefault()
     const body ={
         Email,
         password,
     }
     axios.post(`http://localhost:4000/users/login`,body).then((response)=>{
        
         console.log("Data::",response.data)
     })
     .catch((err)=>{
         console.log("err::",err)
     })
    }
    return (
        <div className='Login'>
            <form >
            <input type="email" placeholder='Email'onChange={(e)=>{
               setEmail(e.target.value)
            }}/> <br/>
            <input type="password" placeholder='Password'onChange={(e)=>{
               setPassword(e.target.value)
            }}/> <br/>
           
            <input type="submit" value="Login"onClick={LoginFun}/>
            </form>
            
        </div>
    )
}
