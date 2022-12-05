import {Link} from "react-router-dom";

const Navbar = ({pages})=>{
  return(
    <>
    <ul>
    {pages.map((page,i)=>{
      const path = (i==0)?"/":page;
      return  <li key={page}><Link to={path}>{page}</Link></li>
    })}
    </ul>
    </>
  );
};

export default Navbar;