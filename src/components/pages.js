import React from "react";
import {useParams} from "react-router-dom";

const Home = ()=>{
  return(<h1>Home Page</h1>)
}, About  = ()=>{
  return(<h1>About Page</h1>)
}, Contact = ()=>{
  return(<h1>Contact Page</h1>)
},NotFound = ()=>{
  return(<h1>Not Found</h1>)
},Dynamic = ()=>{
  const key = useParams();
  return(<h1>{key.id}</h1>)
};

export default Home;
export {About,Contact,NotFound,Dynamic};