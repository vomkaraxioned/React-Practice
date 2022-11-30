import {useState} from "react";
import Person1,{Person2} from "./persons.js";

const Hoc = (OriginalComponent)=>{

  const NewComponent = ()=>{
    const [money,setMoney] = useState(0),
  incrementHandler = ()=>setMoney(money=>money+100);
    return(
      <OriginalComponent handler={incrementHandler} title={money}/>
    );
  };

  return NewComponent;

};

const Og1 = Hoc(Person1),
Og2 = Hoc(Person2);

export default Og1;
export {Og2};