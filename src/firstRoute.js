import {Link} from "react-router-dom";

const FirstRoute = ()=>{
return  ( <ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about" >About</Link>
<ul>
<li><Link to="/about/us">us</Link></li>
  </ul></li>
<li><Link to="/contact">Contact</Link></li>
</ul>);
};

export default FirstRoute;