import './App.css';
import {useDispatch,useSelector} from "react-redux";
import increment, { decrement } from './actions/changeValue';
import store from './store';

function App() {
  // store.subscribe(()=>console.log(store.getState()));
  const dispatch = useDispatch(),
  myState = useSelector(store=>store.changeValue);
  return (
    <div>
    <button onClick={()=>dispatch(increment())}>+</button>
    <h1>{myState}</h1>
    <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;