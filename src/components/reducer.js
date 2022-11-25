import {useReducer,useState} from "react";

const reducer= (currentState,action)=>{
  action == "+"?currentState++:currentState--;
  return currentState;
};

const ReducerFunc = ()=>{

  const [currentState,dispatch] = useReducer(reducer,0);


  return(
    <div>
      <h1>{currentState}</h1>
      <div>
      <button onClick={()=>dispatch("+")}>incre</button>
      <button onClick={()=>dispatch("-")}>decre</button>
      </div>
    </div>
  );
};

export default ReducerFunc;