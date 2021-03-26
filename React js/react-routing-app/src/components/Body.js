import react from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "../asserts/style/Body.css";

const Body = (props)=> {
  return(
    <div class="container-fluid ">
    <div className="row cards">
        <div class="card">
            <div class="card-header bg-secondary text-white"><h5 className="text-left ml-5 pl-5 ">ANGULAR DEVELOPMENT COURSE</h5>
            </div>
            <div class="card-body text-left"><p>Aangular is papular for making dinamic application and its information official and reliance infucion
            includes altogether lessen the measure of...</p>
            </div>
        </div>
        <div class="card">
            <div class="card-body"><a className="nav-link" href="#">Angular training</a>
                <h6>1870 Enrolled</h6>
            </div>
        </div>
        <div class="card">
            <div class="card-body"><a className="nav-link" href="#">React js training</a>
                <h6>1870 Enrolled</h6>
            </div>
        </div>
        <div class="card">
            <div class="card-body"><a className="nav-link" href="#">Bootstrap training</a>
                <h6>1870 Enrolled</h6>
            </div>
        </div>
    </div>
</div>
  )
}
export default Body;