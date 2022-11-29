import React,{useState,useMemo} from 'react';
import Title,{Button} from "../componenets/common.js";
import { json } from 'react-router-dom';

const Usememo = ()=>{

  const [state,setState] = useState(0),
  [text,setText] = useState("render"),
  expensiveFunction = ()=>{
    for(let i=0;i<500;i++) { let j = i}
    return text;
  }, incre = ()=>{
    setState(state=>state+1);
  setText(text=>state+1+"render")},
  memoized = useMemo(expensiveFunction,[text]);

  return(
    <div>
      <Title title="usememo"/>
      <Title title={state}/>
      <Title title={memoized}/>
      <Button name="increment" handler={incre}/>
    </div>
  );
};
export default Usememo;
