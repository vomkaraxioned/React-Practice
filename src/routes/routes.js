import React from "react";
import {Routes,Route} from "react-router-dom";
import Home,{About,Contact,NotFound,Dynamic} from "../components/pages.js";

const RoutingSimple = ()=>{
 return( <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" indexed element={<Dynamic/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="*" element={<NotFound/>}/>
</Routes>);
};

const ParamsRouting = ()=>{
  return (<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path=":id" element={<Dynamic/>}/>
  </Routes>)
};

const Nesting = ()=>{

};

export default RoutingSimple;
export {ParamsRouting,Nesting};    