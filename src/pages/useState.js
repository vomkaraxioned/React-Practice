import React,{useState} from 'react';
import Button from "../components/Button/index";
import Title from "../components/Title/index";

const Usestate = ()=>{

  const [state,setState] = useState(0),
  incre = ()=>setState(state=>state+1);

  return(
    <div>
      <Title title="usestate"/>
      <Title title={state}/>
      <Button name="increment" handler={incre}/>
    </div>
  );
};
export default Usestate;
