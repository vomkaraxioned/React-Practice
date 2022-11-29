import React,{useState,useEffect} from 'react';
import axios from "axios";

const AxiosExample = ()=>{

const [data,setData] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>setData(res)).catch(err=>setData(err));
    console.log(data)
  },[]);

  return(
    <>
    <h1>Axios</h1>
    </>
  );

};

export default AxiosExample;
