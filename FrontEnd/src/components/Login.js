import axios from 'axios'
import React,{useState} from 'react'
import {Link} from "react-router-dom";


export default function Login(props) {
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
         props.setisLogedin(true)
         props.setuserName(response.data.username)
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
           
            <input type="submit" className='btn btn-danger' value="Login"onClick={LoginFun}/>
            </form>
            <Link to="/Register">عندك حساب؟</Link>
            
        </div>
    )
}
