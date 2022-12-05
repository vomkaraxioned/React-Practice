import {useCallback,useState} from "react";

import Button from "../components/Button";
import Title from "../components/Title";

const Usecallback = ()=>{

  const [state,setState] = useState(0),
  incre = useCallback(()=>setState(state=>state+1),[state]);

  return(
    <div>
      <Title title="useCallback"/>
      <Title title={state}/>
      <Button name="increment" handler={incre}/>
    </div>
  );
};
export default Usecallback;
