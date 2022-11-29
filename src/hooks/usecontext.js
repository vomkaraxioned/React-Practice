import React,{useContext} from 'react';
import Title,{Button} from "../componenets/common.js";
import ContextProvider,{Context} from "./contextprovider.js";

const Usecontext = ()=>{

  const name = useContext(Context)
  ,child =   <div>
  <Title title="Context"/>
</div>;
console.log(name)
  return(
    <ContextProvider >
    <Title title={name}/>
    </ContextProvider>
  );
};
export default Usecontext;
