import React from 'react'

export default function Todo(props) {
    const {_id,title,isComplet}=props.task
    return (
        
        <div className='Todo'>

           {/* <span className='spR'>
           <input className='check' type="checkbox"
             defaultChecked={isComplet}
             onClick={()=>{
                 props.UpdateTask(_id,!isComplet)
             }}
            />
               </span>
            
           <span className='spM' style={{ 
               textDecoration : isComplet ?
             "line-through rgb(38, 185, 99)" : "none" }}>
               {title}</span>
            
         <span className='spL'>
         <button className='x' onClick={()=>{
                props.DeleteTask(_id)
            }}>X</button>
             </span>    */}
             
             <ul class="list-group">

             <li class="list-group-item list-group-item-warning"
             
             style={{ 
                textDecoration : isComplet ?
              "line-through rgb(38, 185, 99)" : "none" }}>
                  

                 {<button className='x' onClick={()=>{
                props.DeleteTask(_id)
            }}>X</button>}


                 {title}</li>

{
    <input className='check' type="checkbox"
    defaultChecked={isComplet}
    onClick={()=>{
        props.UpdateTask(_id,!isComplet)
    }}
   />
}

             </ul>
            
        </div>
    )
}
