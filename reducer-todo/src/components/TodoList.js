import React,{useReducer,useState} from 'react';
import {reducer, initialState} from '../reducers/reducer'
function List(props){
    const [state,dispatch]=useReducer(reducer,initialState)
    const [view,setDisplay]=useState('relative');
    return (
        <div style={{display: view}} onClick={()=>{
            state.complete();
            console.log(state);
            if(state._complete===true){
                setDisplay('none');
            }
        }}>
            <h3>{props.item}</h3>
        </div>
    )
}
export default List;