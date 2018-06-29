import React, {Component} from "react";

class Archives extends Component {
    render(){
	return(
		<div>
		  <h1> Archives: </h1>
		  <p>
		  Organized in reverse chronological order
		  monthly. Each month should have goals for the next
		  month (theoretically updated with progress as the
		  month goes on), along with things I've
		  done/consumed/thought was relevant in the past
		  month. </p>
		    <h3 align = "center"> June 2018 </h3>
		    <h5> Goals for July: </h5>
		  <ul>
		    <li>Finish my project writeups for Elliptic
		      Curves and for Pythagorean Triplets</li>
		    <li> Get more comfortable/learn the details of
		    org mode, convert all of the files on this
		      website into org file exports.</li>
		    <li> Continue working through my Readings, make
		    some cool examples/implementations of the ideas
		      in the Deep Learning book.</li>
		    <li> Start background research and initial work for secret project.</li>
		    <li> Send all of the V4's in the rock gym</li>
		  </ul>
		  <h5> Things I've Done: </h5>
		  <ul>
		    <li> Finished up Statistical Inference by
		      Casella and Berger, started Pollard's
		      probability book.</li>
		    <li> Cleared some bugs on the Elliptic Curves
		    implementations, made a small python interface
		      for each of the modules, and launched the first version. </li>
		    <li> Began learning how org-mode works, already
		      noticing a marked increase in productivity, and
		      started optimizing my org-mode usage</li>
		    <li> Made this website! </li>
		    <li> Finished the last V3 in the gym. </li>
		    
		  </ul>
		</div>
	);
    }
}

export default Archives;
