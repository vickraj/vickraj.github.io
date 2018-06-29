import React, {Component} from "react";

class Home extends Component {
    render(){
	return(
		<div>
		<h1> Hello!</h1>
		<div id = "alert_wrapper">
		<h2> Recent Updates </h2>
		<ul>
		<li> The website went live! (6/28/2018) </li>
		</ul>
		</div>
		<h3 align = "center" > What is it?</h3>
		<p>This website is mostly a repository of
                write-ups/code for various projects and ideas that I've been
                working on. Theoretically, this will be a hub for
    anyone to see what I've been thinking about or to learn more about
	    me, and it will simultaneously be an easy
    way for me to keep track of what I've been doing. 
		</p>
		<p>  Most of the larger and more
    interesting ideas will be in the <a href = "/projects"> projects
	    </a> section, while some of the smaller
	    effort write-ups will be scattered around the site,
	    probably with my <a href = "/agenda"> agenda</a>    section. </p>

		<p> In terms of content, the projects I'm interested
		in usually find themselves broadly in the areas of Mathematics
	    and Computer Science, and can range from small
		applications to independent
		research. My more specific interests can be found <a
	    href = "/about"> here</a>. </p>
	
		</div>
		
	);

    }
}
export default Home;
