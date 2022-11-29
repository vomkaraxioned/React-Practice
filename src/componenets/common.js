import React from 'react'

const Title = (props)=>{
  return(<h1>{props.title}</h1>);
};

const Button = (props)=>{

  return(<button onClick={props.handler}>{props.name}</button>)

};
export default Title;
export {Button};
