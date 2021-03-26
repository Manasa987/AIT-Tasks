import react from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "../asserts/style/Header.css";

const Header = (props)=> {
  return(
      <nav className="container-fluid bg-dark">
        <div className="col-12">
        <ul className="row">
          <Link to="Header"><img className="col-10" src="https://www.achieversit.com/assets/images/AIT-white.jpg" /></Link>
            <li className="nav-link pt-4 col-7 text-right "><Link to="Home" className="text-decoration-none  a1"><h6>Carporate Training</h6></Link></li>
            <li className="nav-link pt-4 pr-5 col-2 text-right "><Link to="Contact" className="text-decoration-none  a1"><h6>Placement Page</h6></Link></li>
            
        </ul>
        </div>
      </nav>
      
  )
}
export default Header;