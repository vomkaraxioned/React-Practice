import './App.css';
import {useDispatch,useSelector} from "react-redux";
import increment, { decrement } from './actions/changeValue';

// store.subscribe(()=>console.log(store.getState()))
function App() {
  const dispatch = useDispatch();
  return (
    <div>
    <button onClick={()=>dispatch(increment())}>+</button>
    <h1>{value}</h1>
    <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;