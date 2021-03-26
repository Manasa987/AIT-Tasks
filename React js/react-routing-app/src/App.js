import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch ,Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Headerline from './components/Headerline';
import Body from './components/Body';
//import Carousel  from './components/Carousel';
function App() {
  return (
    <div className="App">
        <Header/>
        <Headerline/>
        {/* <Carousel/> */}
  <Switch>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Body/>
            </Route>
        
  </Switch>
  <br/>
  <Footer/>  
    </div>
  );
}

export default App;
