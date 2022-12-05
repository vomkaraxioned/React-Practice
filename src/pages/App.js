import Navbar from "../components/Navbar/index";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Usestate from "./useState";
import Useeffect from "./useeffect";
import Usecontext from "./usecontext";
import Usememo from "./usememo";
import Usecallback from "./callback";
import pages from "../objects";
import PagesContext from "../context/PagesContext";


function App() {
  return (
    <BrowserRouter>
    <PagesContext.Provider value={pages}>
    <Navbar />
    </PagesContext.Provider>
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
