import React, {Component} from "react";
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Agenda from "./Agenda";
import Contact from "./contact";
import Archives from "./Archives";
class App extends Component{
    render() {
	return (
	    <BrowserRouter>
		<div>
		<h1 align = "center" > Vickram Rajendran </h1>
		<h3 id = "tags" align = "center"> Mathematics &cup; Computer Science
	    </h3>
		
		<ul className="header" >
            <li><NavLink exact to="/">Home</NavLink></li>
		<li><NavLink to="/about">About Me</NavLink></li>
		<li><NavLink to="/projects">Projects</NavLink> </li>
		<li><NavLink to="/agenda">Agenda</NavLink> </li>
		<li><NavLink to="/archives">Archives</NavLink></li>
		<li><NavLink to="/contact">Contact</NavLink></li>
		<li><a href="files/resume.pdf" target = "_blank">Resume</a></li>
		</ul>
		
          <div className="content">
		<Route exact path ="/" component = {Home}/>
		<Route path ="/about" component = {About}/>
		<Route path ="/projects" component = {Projects}/>
		<Route path ="/agenda" component = {Agenda}/>
		<Route path = "/archives" component = {Archives}/>
		<Route path ="/contact" component = {Contact}/>
          </div>
		</div>
		</BrowserRouter>
    );
  }
}
 
export default App;
