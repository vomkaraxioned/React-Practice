import './App.css';
import value from "./store.js";
import {useDispatch,Provider} from "react-redux";
import increment, { decrement } from './actions/changeValue';


function App() {
  return (
   <Provider store={value}>
      <div>
    <button onClick={()=>useDispatch(increment)}>+</button>
    <h1>{}</h1>
    <button onClick={()=>useDispatch(decrement)}>-</button>
    </div>
   </Provider>
  );
}

export default App;
