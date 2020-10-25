import React from 'react'



const Additem = (props) => {
  const {addTodo} =props
  
  
 
  return (
    <div>
      
      
      <button onClick={addTodo}>Add Item</button>
    </div>
  );
};
export default Additem