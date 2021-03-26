import react from 'react';
import ReactDOM from 'react-dom';
import "../asserts/style/Footer.css";
import { BrowserRouter as Router, Switch ,Route,Link
      } from "react-router-dom";

const Footer = (props)=> {
  return(
      <div className="container-fluid  bg-dark">
      <div className="row pt-4 col-12  pl-1">
            <div><img className="col-10" src="https://www.achieversit.com/assets/images/AIT-white.jpg"/><br/>
                <p className="pl-5 text-muted">AchieversIT - provides a wide group of opport<br/>unities for freshers and 
                    Experienced candidate<br/> who can develop their skills and build their car<br/>eer
                    opportunities across multiple Companies.</p></div>
            <div className="row pt-4 col-9 pl-0 text-secondary">
                <h5 className="col-3">COMPANY
                    <ul className="text-white list-unstyled pt-4 pl-5 ml-4 text-left footer">
                        <li className="pb-3 a1">Home</li>
                        <li className="pb-3 a1">placements</li>
                        <li className="pb-3 a1">Carporate training</li>
                        <li className="pb-3 a1">CONTACT US</li>
                    </ul>
                </h5>
                <h5 className="col-3 pl-4">TRENDING COURSES
                <ul className="text-white list-unstyled pt-4 pl-4 text-left footer">
                        <li className="pb-3 a1">UI Development Course</li>
                        <li className="pb-3 a1">Angular JS Course</li>
                        <li className="pb-3 a1">React JS Course</li>
                        <li className="pb-3 a1">Digital Marketing Course</li>
                        <li className="pb-3 a1">Python Course</li>
                    </ul></h5>
                <h5 className="col-5 ml-5">CONTACT INFO
                    <ul className="text-white list-unstyled pt-4 pl-5 ml-5 text-left footer ">
                            <li className="pb-3">#272, 6th Main, Next to Preksha Montessori ,
                                1st Floor, BTM 2nd Stage, Bangalore,India - 560076
                            </li>
                            <li className="pb-3">India : +91 8431-040-457</li>
                            <li className="pb-3">info@achieversit.com</li>
                        
                    </ul>
                </h5>      
            </div>
      </div>
      <hr className="bg-white"></hr>
      <div class="conatainer px-5 py-4 text-right">
        <div class="row">
            <div class="col-4 co-lg-6 text-muted  pl-5">
                Copyright © 2020 AchieversIT. All Rights Reserved
            </div>
            <div class="col-2 co-lg-2">
                <a href="" class="text-decoration-none text-white pr-5 mr-4">Privacy Policy</a>
            </div>
            <div class="col-2 co-lg-2   ">
                <a href="" class="text-decoration-none text-white pr-5 mr-5">Terms of use</a>
            </div>
            <div class="col-2 co-lg-2">
                <a href="" class="text-decoration-none  text-white pr-5 mr-5">Refund Policy</a>
            </div>
        </div>
        </div>
      </div>
  )
}
export default Footer;