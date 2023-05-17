import React from 'react'

function TodoItem(props){
    return(
        <>
        <div className='item'>
            <input 
                type="checkbox" 
                checked={props.list.completed} 
                onChange={() => props.handleChange()}
                
                />
            <p>{props.list.text}</p>
        </div>
        </>
    )
}

export default TodoItem