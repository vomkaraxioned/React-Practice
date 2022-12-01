import React,{useState} from 'react';
import Title,{Button} from "../componenets/common.js";

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
