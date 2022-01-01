import axios from 'axios'
import React,{useState} from 'react'
import {Link} from "react-router-dom";


export default function Register() {
    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")

    const RegisFun =(e) =>{
     e.preventDefault()
     const body ={
         Email,
         password,
         username,
     }
     axios.post(`http://localhost:4000/users/register`,body).then((response)=>{
        
         console.log("Data::",response.data)
     })
     .catch((err)=>{
         console.log("err::",err)
     })
    }
    return (
        <div className='Register'>
            <form >
            <input type="email" placeholder='Email'onChange={(e)=>{
               setEmail(e.target.value)
            }}/> <br/>
            <input type="password" placeholder='Password'onChange={(e)=>{
               setPassword(e.target.value)
            }}/> <br/>
            <input type="text"  placeholder='Username'onChange={(e)=>{
               setUserName(e.target.value)
            }}/><br/>
            <input type="submit" className='btn btn-danger' value="Register"onClick={RegisFun}/>
            </form>
            <Link to="/Login">ماعندك حساب؟ </Link>
        </div>
    )
}
