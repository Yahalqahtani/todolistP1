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
    <Todo key={taskObj._id} task={taskObj} DeleteTask={DeleteTask}
    UpdateTask={UpdateTask}/>
  ))

  // delete all tasks function for the button
  const DeleteDoneTasks = () =>{
    axios.delete(`http://localhost:4000/tasks`)
   .then((response)=>{
    
  
    GetData()
   })
   .catch((err)=>{
     console.log('Error',err)
   })
     
   
  }

  // get data by filter true or false
  const filterData = (status)=>{
    axios.get(`http://localhost:4000/filter?isComplet=${status}`)
    .then((response)=>{
     
      console.log("Data",response.data)
     settasks(response.data)
 
    })
    .catch((err)=>{
      console.log('Error',err)
    })
 
   }
  return (

    <div>
 <div className='title'>قائمة المهام</div>

 <button onClick={DeleteDoneTasks}>Delete All Tasks</button>

 <button onClick={()=>{
   filterData(true)
 }}>Get Tasks Done</button>



 <button onClick={()=>{
   filterData(false)
 }}>Get Task Not Done</button>
      
 <div className="App">
       <AddDelete createtask={PostNewTask}/>
      {MapOverTasks}
    </div>

    </div>
    
  )
}

