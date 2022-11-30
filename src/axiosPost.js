import React,{useState, useEffect} from 'react';
import axios from "axios";

const AxiosPost = ()=>{

const [data,setData] = useState({}),
[error,setError] = useState(null),
addPost = ()=>{
  axios.post("https://jsonplaceholder.typicode.com/posts/1",{id:101,title:"New post"}).then(res=>setData(res.data)).catch(err=>setError(err.message));
};

useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res=>setData(res.data))
  .catch(err=>setError(err.message));
},[]);

  
if(error) {
  return(<h1>{error}</h1>)
}else {
  return(
  <><ul>
  <li key={data.id}>{data.id+":"+data.title}</li>
  </ul>
  <button onClick={addPost}>add one</button>
  </>);
}};

export default AxiosPost;
