import './App.css';
import RoutingSimple,{ParamsRouting,Nesting} from "./routes/routes.js";
import FirstRoute from "./firstRoute.js";
import ParamsRoute from "./paramsRoute.js";

function App(props) {
  return (
    <>
    {/* <FirstRoute/>
   <RoutingSimple/> */}
   <ParamsRoute/>
   <ParamsRouting/>
   </>
  );
}

export default App;
