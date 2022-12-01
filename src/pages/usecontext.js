import React,{useContext} from 'react';
import context,{ContextProvider } from "./contextprovider.js";


const Usecontext = ()=>{
  return(
  <ContextProvider children={<Title/>}/>
      
  );
};

const Title = ()=>{
  const user = useContext(context);
  return (<h1>{user}</h1>)
};
export default Usecontext;
