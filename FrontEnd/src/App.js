import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Todo from './components/Todo'
import "./App.css"
import AddDelete from './components/AddDelete'



export default function App() {
  const [tasks, settasks] = useState([])

  useEffect(() => {
    GetData()
    
  }, [])

 // Get All Data
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
 //Post New Data (connect with AddDelete.js)
  const PostNewTask = (body) =>{
    axios.post(`http://localhost:4000/tasks`,body)
   .then((response)=>{
    
  
    GetData()
   })
   .catch((err)=>{
     console.log('Error',err)
   })
     
   
  }

  // delete task 
  const DeleteTask = (id) =>{
    axios.delete(`http://localhost:4000/tasks/${id}`)
   .then((response)=>{
    
  
    GetData()
   })
   .catch((err)=>{
     console.log('Error',err)
   })
     
   
  }

  // put update task (toggle)
  const UpdateTask = (id,newIsComplet) =>{
    axios.put(`http://localhost:4000/tasks/${id}/${newIsComplet}`)
   .then((response)=>{
    
  
    GetData()
   })
   .catch((err)=>{
     console.log('Error',err)
   })
     
   
  }

  const MapOverTasks=tasks.map((taskObj,i) =>(
    <Todo key={i} task={taskObj} DeleteTask={DeleteTask}
    UpdateTask={UpdateTask}/>
  ))
  return (

    <div>
 <div className='title'>قائمة المهام</div>
      
 <div className="App">
       <AddDelete createtask={PostNewTask}/>
      {MapOverTasks}
    </div>

    </div>
    
  )
}

