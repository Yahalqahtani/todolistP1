import React,{useState}  from'react'

export default function AddDelete(props) {
const [AddNewTask, setAddNewTask] = useState("")

    const createNewTask =()=>{
     props.createtask({title:AddNewTask,isCmoplet:false})
    }
    return (
        <div className='btnaddiv'>
            <input className='inputTask' type="text" placeholder='أكتب مهمة جديدة'onChange={e =>{
                // put value in state
                setAddNewTask(e.target.value)
                
            }}/>
            <button className='btnAdd' onClick={createNewTask} 
           
            >+</button>
        </div>
    )
}
