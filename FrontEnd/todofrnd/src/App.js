import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Todo from './components/Todo'
import "./App.css"



export default function App() {
  const [tasks, settasks] = useState([])

  useEffect(() => {
    GetData()
    
  }, [])

  const GetData = ()=>{
   axios.get("http://localhost:4000/tasks")
   .then((response)=>{
    
    //  console.log("Data",response.data)
    settasks(response.data)

   })
   .catch((err)=>{
     console.log('Error',err)
   })

  }

  const MapOverTasks=tasks.map((taskObj,i) =>(
    <Todo key={i} task={taskObj}/>
  ))
  return (
    <div className="App">
      <p className='title'> My Tasks</p>

      <button onClick={GetData}>Get Tasks</button>
      {MapOverTasks}
    </div>
  )
}

