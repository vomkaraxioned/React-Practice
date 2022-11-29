import {useCallback,useState} from "react";

import Title,{Button} from "../componenets/common.js";

const Usecallback = ()=>{

  const [state,setState] = useState(0),
  incre = useCallback(()=>setState(state=>state+1),[state]);

  return(
    <div>
      <Title title="usestate"/>
      <Title title={state}/>
      <Button name="increment" handler={incre}/>
    </div>
  );
};
export default Usecallback;
