import React from 'react'

export default function Todo(props) {
    const {_id,title,isComplet}=props.task
    return (
        <div className='Todo'>
            <p>{title}</p>
            
        </div>
    )
}
