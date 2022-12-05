import {useContext} from "react";
import PageContext from "../../context/PagesContext";
import {Link} from "react-router-dom";

const NavItem = ()=>{
  const pages = useContext(PageContext);
  return (
    <>
    {
      pages.map(({url,name})=><li key={name}><Link to={ url}>{ name}</Link></li>)
    }
    </>
  )
};

export default NavItem;