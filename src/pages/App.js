import Navbar from "../components/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Usestate from "./useState";
import Useeffect from "./useeffect";
import Usecontext from "./usecontext";
import Usememo from "./usememo";
import Usecallback from "./callback";


const Pages = ["usestate","useeffect","usecontext","usememo","usecallback"];

function App() {
  return (
    <BrowserRouter>
    <Navbar pages={Pages}/>
    <Routes>
        <Route path="/" element={<Usestate/>}/>
        <Route path="/useeffect" element={<Useeffect/>}/>
        <Route path="/usecontext" element={<Usecontext/>}/>
        <Route path="/usememo" element={<Usememo/>}/>
        <Route path="/usecallback" element={<Usecallback/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
