import react from 'react';
import Carousel from 'react-bootstrap/Carousel'
// import reactlogo from '../asserts/images/angular_training.jpg';
// import vuelogo from '../asserts/images/aws_training.jpg';
// import signin_left_image from '../asserts/images/web_development.jpg';

class coorousel extends React.Component{
    render(){
        return(
            <div className="container-courosel">
                <div className="row">
                    <div className="col-md-12">
                    <Carousel>
                            <Carousel.Item>
                                <img style={{ width: "100%", height: "500px" }}
                                    className="d-block w-100"
                                    src="https://www.achieversit.com/assets/images/angular_training.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ width: "100%", height: "500px" }}
                                    className="d-block w-100"
                                    src="https://www.achieversit.com/assets/images/aws_training.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ width: "100%", height: "500px" }}
                                    className="d-block w-100"
                                    src="https://www.achieversit.com/assets/images/web_development.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </div>

            </div>
        )
    }
}
export default coorousel;