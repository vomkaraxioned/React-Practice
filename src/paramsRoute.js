import { Link } from "react-router-dom";

const ParamsRoute = () => {
  return (<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about" >About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>);
};

export default ParamsRoute;