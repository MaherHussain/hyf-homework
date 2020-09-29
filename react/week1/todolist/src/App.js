import React from 'react';
import logo from './logo.svg';
import './App.css';

const toDoList = [
  {
    title: "Get out of bed",
    when: "Wed Sep 13 2017",
  },
  {
    title: " Brush teeth",
    when: "Thu Sep 14 2017",
  },
  {
    title: "Eat breakfast",
    when: "Fri Sep 15 2017",
  },
];
const TableHeader = ()=> {
  return(
     <table className="redTable">
     <thead>
       <tr>
         <th>title</th>
         <th>when</th>
       </tr>
      
         {
           toDoList.map(ele => {
             return <TodoItems title={ele.title} when={ele.when} />;
           })
         }
      
      
     </thead>
   </table>

  )
  
}
const TodoItems =  (props)=> {
  
  
    return (
      
        <tr>
          <td key="title">{props.title}</td>
          <td key="when">{props.when}</td>
        </tr>
      
    );

} 



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         todo list ...................
        </h1>
        
      </header>
     
        
            
        <TableHeader />
           
           
          
         
        
      
    </div>
  );
}

export default App;
