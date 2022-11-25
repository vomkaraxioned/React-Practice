import {useContext,useState,useEffect} from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom";

const Index = ()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/page2" element={<Page2/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

const Navbar = ()=>{
  return(
      <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/page2">Page2</a></li>
      </ul>
  );
};

const Home = ()=>{
return(

  <header>
    <h1 className="logo">
    Home
    </h1>
    <Navbar/>
  </header>
);
};

const Page2 = ()=>{
  return(
  
    <header>
      <h1 className="logo">
      Page2
      </h1>
      <Navbar/>
    </header>
  );
  };

export default Index;