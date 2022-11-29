import {createContext,useContext} from "react";

const colors = {red:"#f00",black:"#000"}
,Context = createContext(10);

const ContextNode = ()=>{
  return(
    <Context.Provider value={colors.red}>
      <Parent/>
    </Context.Provider>
  );
};

const Parent = ()=>{
  return(<div>
    <h1>Context example</h1>
    <Child />
  </div>);
};

const Child = ()=>{
  const inherit = useContext(Context);
  return(
  <button>{inherit}</button>
  );
};

export default ContextNode;