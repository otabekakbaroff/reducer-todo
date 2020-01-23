import React from 'react';
import List from './TodoList'

const Item = props => {
  const addOne=function(){
    let count=0;
    return function(){
      count++
      return count;
    }
  }
  let newCount=addOne();
  return (
    <div>   
        {props.value.map(item=>(
            <List key={newCount()} item={item}/>
        ))}
    </div>
  );
};


export default Item;