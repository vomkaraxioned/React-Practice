 import Api from "./axios.js";
 import {useState,useEffect} from "react";

 const FetchedData = ()=>{

  const [data,setData]=useState([]),
  [error,setError] = useState(null),
  getData = ()=>{
    Api.get("/posts").then(res=>setData(res.data)).catch(err=>setError(err.message));
  };

  useEffect(()=>{
    getData;
    return 
  },[]);

    if(error) {
      return (<h1>{error}</h1>);
    }else {
      return(
      <ul>
        {data.map(post=>{
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>);
    }
 };


 export default FetchedData;