import './App.css';
import Header from './My Components/header';
import Card  from './My Components/card';
import Form from './My Components/form';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  
  // cont is an Array of objects
  /* prop is basically an object and we can pass value in function throuhgh it   
    Here nav is a variable
  */
  let initValue;
      if(localStorage.getItem('cont')===null){
        initValue=[]
      }
      else{
        initValue = JSON.parse(localStorage.getItem('cont'));
      }
      
      
      const OnDelete = (ite)=>
      {
        console.log("I am OnDelete Function",ite)
        
        // array.filter(function(currentValue, index, arr), thisValue)
        
        setCount(cont.filter((e)=>{
          return e!==ite;
        }))
        
        // localStorage.setItem('cont',JSON.stringify(cont))
      }
      
      const addInfo=(title,desc)=>{
        let s_no;
        if(cont.length===0){
          s_no=1;
        }
        else{
          s_no = cont[cont.length-1].s_no+1;
        }
        // info is an object 
        const info={
          s_no: s_no,
          title: title,
          desc: desc
        }
    setCount([...cont,info])
    console.log(info)
    console.log("I have added info",title,desc)
    
  }
  
  // useState is a hook that returns a pair of values : the current state i.e "cont" and a function i.e "setCount" that updates it
  const [cont, setCount] = useState(initValue);
  
  useEffect(() => {
    localStorage.setItem('cont',JSON.stringify(cont))
    }, [cont])
  
    return (
    <>
  <Router>

   <Header nav='Daily Routine' searchbar={true}/>
   
   <Switch>
      <Route exact path="/" render={()=>{
        return(
        <>
        <Form addInfo={addInfo}/>
        </>)
      }}>
      </Route>

      <Route exact path="/cards" render={()=>{
        return(
          <Card data={cont} del={OnDelete}/>            
        )
      }}>
      </Route>   
   </Switch>
  
  </Router>
   </>
  );
}

export default App;
