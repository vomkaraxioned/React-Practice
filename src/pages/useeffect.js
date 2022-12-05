import React,{useState,useEffect} from 'react';
import Button from "../components/Button";
import Title from "../components/Title";

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
