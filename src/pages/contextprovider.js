import React,{createContext} from 'react';

const context = createContext(),
 user = "omkar";

const ContextProvider = (props)=>{
  return(
    <context.Provider value={user}>
      {props.children}
    </context.Provider>
  );
};

//can use {children} here

export default context;
export {ContextProvider};