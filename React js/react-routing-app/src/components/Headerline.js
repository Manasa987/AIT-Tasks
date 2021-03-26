import react from 'react';
import ReactDOM from 'react-dom';
import "../asserts/style/Headerline.css";
import { Link } from "react-router-dom";
const Headerline = (props)=> {
    return(
        <div className="container-fluid bg-white  sticky-top">
            <ul className="nav px-2 mx-2 pb-3">
                <li className="nav-item pl-2 "><a className="nav-link txt" href="#"><h6>Courses</h6></a></li>
                <li className="nav-item pl-2 "><a className="nav-link txt" href="#"><h6>UI Development</h6></a></li>
                <li className="nav-item pl-2 "><a className="nav-link txt" href="#"><h6>Angular</h6></a></li>
                <li className="nav-item pl-2 "><a className="nav-link txt" href="#"><h6>React JS</h6></a></li>
                <li className="nav-item pl-2 "><a className="nav-link txt" href="#"><h6>VUE JS</h6></a></li>
                <li className="nav-item pl-2 "><a className="nav-link txt" href="#"><h6>MEAN</h6></a></li>
                <li className="nav-item pl-2 "><a className="nav-link txt" href="#"><h6>MERN</h6></a></li>
                <li className="nav-item pl-2 "><a className="nav-link txt" href="#"><h6>Digital Marketing</h6></a></li>
                <li className="nav-item pl-2 "><a className="nav-link txt" href="#"><h6>PYTHON</h6></a></li>
                <li className="nav-item pl-2 "><a className="nav-link txt" href="#"><h6>ICONIC</h6></a></li>
                <li className="nav-item pl-2 "><a className="nav-link txt" href="#"><h6>React Native</h6></a></li>
                <li className="nav-item pl-2 "><a className="nav-link txt" href="#"><h6>WEB DEV</h6></a></li>
            </ul>
    </div>
    )
  }
  export default Headerline;