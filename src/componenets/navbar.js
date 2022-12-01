import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Usestate from "../pages/useState";
import Useeffect from "../pages/useeffect";
import Usecontext from"../pages/usecontext";
import Usememo from "../pages/usememo";
import Usecallback from "../pages/callback";

const Navbar = ()=>{
  return(
    <>
    <BrowserRouter>
    <ul>
      <li><Link to="/">UseState</Link></li>
      <li><Link to="/useeffect">UseEffect</Link></li>
      <li><Link to="/usecontext">UseContext</Link></li>
      <li><Link to="/usememo">UseMemo</Link></li>
      <li><Link to="/usecallback">UseCallbaCK</Link></li>
    </ul>
    <Routes>
        <Route path="/" element={<Usestate/>}/>
        <Route path="/useeffect" element={<Useeffect/>}/>
        <Route path="/usecontext" element={<Usecontext/>}/>
        <Route path="/usememo" element={<Usememo/>}/>
        <Route path="/usecallback" element={<Usecallback/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default Navbar;