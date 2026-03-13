import { useState } from "react";

export default function Counter(){
let [count,setCount]= useState(0);// intialization

 let incCount = () =>{
    setCount((currCount)=>{
      return currCount +1;
    }); // trigger the re-render using callback

    setCount((currCount)=>{
        return currCount +2;
    }); // trigger the re-render
   
    // setCount(25);
  }
  

 return(
        <div>
    <h3>Count = {count}</h3>
    <button onClick={incCount}>Increse Count</button>
     </div>
    );
}