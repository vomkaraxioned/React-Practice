import {useCallback,useState} from "react";

const Adder = ()=>{

  const [state,changeState] = useState(1),
  increment = ()=>{
    changeState(state+1);
  },
  checkNumber = useCallback(()=>{
   const flag= state<10?true:false;
  },state);

return(
<>
<h1>{state}</h1>
<button onClick={increment}>incre</button>
</>);
};

export default Adder;