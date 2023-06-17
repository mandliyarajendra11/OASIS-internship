import React, { useRef } from 'react'
import { TodoItem } from './TodoItem'
import { addTodo,Clear} from './Redux/Action';
import {useDispatch, useSelector } from 'react-redux';

const Todo = () => {
  const values=useRef("");
  const des=useRef('');
  const dispatch=useDispatch();
  const list=useSelector((e)=>e.Reducer.list);
  function dis(e) {
    e.preventDefault()
    dispatch(addTodo(values.current.value,des.current.value));
    des.current.value="";
    values.current.value="";
    }
  
  return (
    <>
    <div className='header'>   
   <h4 >Todo List web app</h4>
     
     <button className='btn btn-dark rounded-circle'>{list.length}</button>
   </div>
    <div className='grid'>
      
    <form className="form" onSubmit={dis}>

  <input type="text"  required
  placeholder="title" ref={values} 
    />
    <textarea rows={10} cols={315} placeholder='description' required
    ref={des}
    />
    
  <button className="btn btn-success " type="submit" id="button-addon2" 
  >Save</button>
</form>

    <div className='output'>
        
        <div className='heading'>
        <b>Done</b>
        <b>title</b>
        <b>description</b>
        <b>Delete</b>
        </div>
    <hr className='hr'/>
    <TodoItem/>
    { list.length!==0?
    <button className="btn bg-warning" type="button" id="button-addon2"
    onClick={()=>dispatch(Clear(values))} >Clear All</button>
      :null}
      </div>
      </div>
    </>
  )
}

export default Todo