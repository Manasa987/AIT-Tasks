import react from 'react';
import "../asserts/style/Home.css";
class Home extends react.Component{
    render(){
        return(
        <div>
            <div className="carporate bg-muted">
                    <div className="text-left text-white "><h2><b>IT ON - JOB SUPPORT</b></h2>
                        <h6>Home</h6>
                    </div>
                </div>
                <div>
                    <h2 className="pt-5"><b>CORPORATE TRAINING</b></h2>
                    <hr className="horiz"></hr>
                </div>
                <h5 className="pt-4">
                Looking for a live instructor Led Online training platform to train your employees and connect them with best<br/> professional trainers, and enrich their careers?
                </h5>
                <div className="courses container row col-12">
                    <div className="col-5">
                          <h4 className="text-left pl-4">Proven Online training Platform</h4>
                          <hr className="bg-dark hori"></hr>
                          <p className="text-left pl-4">AchieversIt has built up a robust Live 
                              Instructor-Led internet preparing stage 
                              that permits learners to get prepared by
                               the Expert coaches and through self-guided 
                               preparing programs. </p>
                    </div>
                    <div className="col-5">
                          <h4 className="text-left">Trending Courses </h4>
                          <hr className="bg-dark hori1"></hr>
                          <p className="text-left">Our E-learning Management system (LMS)
                           comprises of a few courses identified with the most recent progressions 
                          in Information Technology and Software, for example, Business 
                          Intelligence and Analytics, DevOps, Cloud Integration, Cloud Computing,</p>
                    </div>
                </div>
                <div className="container-fluid text-left row pt-5 mt-5 pl-0 ">
                    <img className="col-6" src="https://www.achieversit.com/assets/images/corporate-training-2.jpg" height="500px" width="50%" />
                    <div className="training pl-5 pt-4 col-6 bg-info "><h3 className="ml-5 pl-5 pt-5">TRAINING TAILORED TO YOUR NEEDS</h3>
                    <hr className="horiz"></hr>
                    <h5 className="pt-5"><b>Our training practice are perfectly blended with options for<br/> effective eLearning or online classroom</b></h5>
                    <h5 className="pt-5"><b>We are the best and most unique Foundation, Intermediate,<br/> and Expert level curriculum</b></h5>
                    <h5 className="pt-5"><b>Easy accessibility of training online or offline - anytime,<br/> anywhere, on any of your devices.</b></h5>
                    </div>
                </div>
                <div>
                    <h2 className="mt-5 pt-5">TRAINING COURSES THAT UNLOCK YOUR TEAM'S POTENTIAL</h2>
                    <hr className="horiz"></hr>
                </div>
                <div class="container ">
                    <div className="row">
                        <div class="card">
                            <div class="card-body"><a className="nav-link" href="#">UI Development training</a>
                               <h6>1870 Enrolled</h6>
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
                <div class="container ">
                    <div className="row">
                        <div class="card">
                            <div class="card-body"><a className="nav-link" href="#">Php training</a>
                                <h6>1870 Enrolled</h6></div>
                        </div>
                        <div class="card">
                            <div class="card-body"><a className="nav-link" href="#">Java training</a>
                                <h6>1870 Enrolled</h6>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body"><a className="nav-link pl-2" href="#">Digital Marketing training</a>
                                <h6>1870 Enrolled</h6>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body"><a className="nav-link" href="#">Python training</a>
                                 
                                <h6>1870 Enrolled</h6>
                            </div>
                        </div>
                    </div>
                </div>
         </div>  
        );
    }
}
export default Home;