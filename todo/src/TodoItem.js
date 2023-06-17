import React, { useState } from 'react'
import { Delete } from './Redux/Action';
import { useSelector ,useDispatch} from 'react-redux'
export const TodoItem = () => {
  const dispatch =useDispatch();
  const val=useSelector((s)=>s.Reducer.list);
 const [done,setDone] = useState('');
  return (
    <>
      {
        
        val.map((e)=>{
          return <li key={e.id} className="list  ">
            <input type='checkbox' className='form-check-input form-check-input-lg'  onChange={(curr)=>curr.target.checked?setDone(e.id):setDone('')} />
             <span className={done===e.id?"del":null} style={{overflow:'hidden'}} > {e.title}</span> 
             <span className={done===e.id?"del":null} style={{overflow:'hidden'}} >{e.des}</span>
              
              <button className="btn-danger rounded text-center px-2 pb-1  fw-bolder" 
          onClick={()=>dispatch(Delete(e.id))}>&times;</button>
          </li>
          
        })}
    </>
    )
}
