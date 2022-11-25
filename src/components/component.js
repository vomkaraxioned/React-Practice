import React,{useEffect,useState} from "react";

/* types of component,staes,props */

class FirstComponent extends React.Component{
  //mounting phase
  constructor(props){
    super();
    this.state = {msg:`${props.name} is ${props.age} year old`,age:Number(props.age)};
    this.age = Number(props.age);
  }
  changeState() {
    if(this.state.age <18) {
      this.setState({msg:"you are not eligible for voting"});
    }else {
      this.setState({msg:"you are eligible for voting"});
    }
  }
  render() {
    return (
    <h1>{this.state.msg}</h1>
    );
  }
  componentDidMount(){
    this.timer = setInterval(this.changeState.bind(this),2000);
  }
  //update phase
  shouldComponentUpdate() {
    const flag = this.state.age === ""?false:true;
    return flag;
  }

  componentDidUpdate() {
    console.log("Updated");
    clearInterval(this.timer);
  }

  //unmount phase
  // componentWillUnmount() {

  // }

} 

const FuncComponent = (props)=>{
  const [state,changeState] = useState({count:0,name:"user"}),
  change = () => changeState((prev)=>{
    return {...prev,admin:"new user"};
  });


  return (
    <div>
      <h1>{state.name }and {state.count}and {state.admin}</h1>
      <button onClick = {change}>add</button>
    </div>
    );
};

const FuncEffect = ()=>{
  const [state,changeState] = useState({count:0,name:"user"}),
  change = () => changeState((prev)=>{
    return {...prev,admin:"new user"};
  });


  useEffect(()=>change());

  return (
    <div>
      <h1>{state.name }and {state.count}and {state.admin}</h1>
    </div>
    );
};

export default FirstComponent ;
export {FuncComponent,FuncEffect};
