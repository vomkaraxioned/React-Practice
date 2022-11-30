import React,{useState,useEffect} from 'react';
import axios from "axios";

const AxiosExample = ()=>{

const [data,setData] = useState([]),
[error,setError] = useState(""),
getApi = async()=>{
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setData(res.data);
  }catch(e) {
    setError(e.message);
  }
};
  useEffect(() => {
    getApi()
  },[data]);

  if(error!="") {
    return <h1>{error}</h1>
  }else {
    return(
      <ul>
          {
          data.map(item =>{
            return(<li key={item.id}>{item.title}</li>);
          })}
      </ul>
        );
  }

};
 
export default AxiosExample;
