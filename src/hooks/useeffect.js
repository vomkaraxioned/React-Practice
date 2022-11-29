import React,{useState,useEffect} from 'react';
import Title,{Button} from "../componenets/common.js";

const Useeffect = ()=>{

  const [state,setState] = useState(0),
  incre = ()=>setState(state=>state+1);

  useEffect(()=>console.log("called"),[state]);

  return(
    <div>
      <Title title="usestate"/>
      <Title title={state}/>
      <Button name="increment" handler={incre}/>
    </div>
  );
};
export default Useeffect;
