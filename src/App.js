import './App.css';
import FirstComponent,{FuncComponent as Fn,FuncEffect as Fe} from './components/component.js';
import ContextNode from './components/context.js';
import reducerFunc from "./components/reducer.js";
import ReducerFunc from './components/reducer.js';
import Adder from './components/callback';

function App(props) {
  return (
  // <FirstComponent name={props.name} age={props.age}/>
  // <Fn name={props.name} age={props.age} count="10"/>
  // <Func name={props.name} age={props.age} count="10"/>
//  <ContextNode />
    // <ReducerFunc/>
    <Adder/>
  );
}

export default App;
