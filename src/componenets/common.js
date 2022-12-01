import React from 'react'

const Title = (props)=>{
  return(<h1>{props.title}</h1>);
};

const Button = ({handler,name})=>{

  return(<button onClick={handler}>{name}</button>)

};
export default Title;
export {Button};
