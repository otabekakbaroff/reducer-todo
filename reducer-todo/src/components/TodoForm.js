import React, {useState,useReducer} from 'react';
import Item from './Todo'
import {reducer, initialState} from '../reducers/reducer'
function ListForm(){
    const [state,dispatch]=useReducer(reducer,initialState);
    const [input,setInput]=useState('');
    const [value, setValue]=useState([]);
    const handleChanges = e => {
       setInput(e.target.value);
    };
    return(
        <div>
            <form>
                 <input onChange={handleChanges}/>
                 {/* <button onClick={addButton}>Add</button> */}
                 <button onClick={(e)=>{
                     e.preventDefault();
                     setValue([...value,input]);
                     dispatch({type:'Add_Item', payload:value})
                 }}>Add</button>
                 <button onClick={(e)=>{
                     e.preventDefault();
                     const newValue=value.filter(item=>{
                         return item!==input;
                     })
                     setValue(newValue);                 
                     dispatch({type:'Remove_Item', payload:value})
                     }}>Remove Item</button>
            </form>
            <Item value={value}/>
        </div>
    )
}
export default ListForm;