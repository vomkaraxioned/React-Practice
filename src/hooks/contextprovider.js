import React,{createContext} from 'react';

const name = "omkar",
Context = createContext();

const ContextProvider = (props)=>{


  return(
   <Context.Provider value={name}>
     {props.child}
   </Context.Provider>
  );
};
export default ContextProvider;
export {Context};