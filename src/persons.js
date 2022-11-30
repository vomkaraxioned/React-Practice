const Person1 = (props)=>{
  return(
  <div>
    <h1>Person1:{props.title}</h1>
    <button onClick={props.handler}>increment</button>
  </div>);
};

const Person2 = (props)=>{
  return(
    <div>
      <h1>Person2:{props.title}</h1>
      <button onClick={props.handler}>increment</button>
    </div>);
};

export default Person1;
export {Person2};