import React, {Component} from "react";

class Agenda extends Component{
    render() {
	return (
		<div>
		<h1> Agenda </h1>
		<p> This is a small agenda of the things that I'm
		currently working on/going through. 
		</p>
		<h3 align = "center"> Projects: </h3>
		    <ul>
		      <li> Elliptic Curves Writeup - Make a small
		      (probably 3-5 pages) write-up about making the
		      python implementation of elliptic curve
		      algorithms, along with suggestions for future
		      implementations and features.</li>
		      <li> Pythagorean Triples Writeup - Make a
		      progress report of my research so far (looking
		      at somewhere around 7-10 pages already), with
		      proofs and maybe a small demo of the algorithms
		      I've made. </li>
		      <li> Website tune-ups - update the website
		      whenever I have time/find improvements that I
		      can make on the site or find weird bugs that I
		      hadn't considered. </li>
		      <li> Secret Project - Background
		      research/initial work in figuring out whether
		      or not this is viable/worth putting time into. </li>
		      </ul>
		  <h3 align = "center">Readings: </h3>
		  <ul>
		    <li> <a href = "https://www.deeplearningbook.org/"
			    target = "_blank">Deep Learning Book</a>
			    - highly recommended by my ML professor
			    for self study on deep learning,
			    particularly since we omitted most of
			    deep learning in the ML course. Will
			    probably make a project out of the things
			    in here...</li>
		    <li> <a href = "https://www.amazon.com/Theoretic-Probability-Statistical-Probabilistic-Mathematics/dp/0521002893"
			    target = "_blank">A User's Guide to
			Measure Theoretic Probability</a> - After
			    Casella-Berger on Statistical Inference,
			    this seems like a natural
			    (read: Mike Jordan's list of what people
			    should learn for ML) next
			    step for learning about probability.</li>
		    
		    <li> <a href =
		    "https://www.amazon.com/Algebraic-Curves-Introduction-Geometry/dp/0805330828"
			    target = "_blank"> Algebraic Curves</a> -
		    Following Berkeley's <a href =
		    "https://math.berkeley.edu/~bernd/math255.html"
					    target = "_blank"
					    >Math 255</a> course, now
		    that I've finished with the relevant sections in Kirwan.</li>
		    <li> <a href =
		    "https://www.springer.com/us/book/9783642192241"
		    target = "_blank">A Royal Road to Algebraic
			Geometry</a> - My first formal cover to cover
		    read of an algebraic geometry book, though I've
		    seen it many times in other works - recommended
		    for me by my professor.</li>
		  </ul>
		  <h3 align = "center"> Pleasure: </h3>
		    <ul>
		    <li> <a href = "https://www.amazon.com/Art-Craft-Problem-Solving/dp/0471789011"
			    target = "_blank">The Art and Craft of
			Problem Solving</a> - a classic book in math
			    olympiad training that I never read when
			    I studied for math competitions in high
			    school - honestly it's probably better
			    that I kept it off until now. Really
			    enjoying how I can apply these problem
			    solving techniques more broadly than just
			    Math Competitions.</li>
		    <li> <a href = "https://www.amazon.com/Once-Runner-John-Parker-Jr/dp/1416597891"
			    target = "_blank">Once a Runner</a> -
			    Recommended by a friend, supposedly a
			    must-read for anyone who's done/enjoys
			    anything competitive.</li>
		    <li> <a href =
			    "https://twigserial.wordpress.com/"
			    target = "_blank"> Twig</a> - I'm a huge
			    fan of Wildbow, and rereading Twig (1.6
			    million words) is almost certainly worth
			    it even if it will take a while. Amazing
			    characterization in a really
			    interesting world, and the first time I've
			    really seen biopunk/sci-fi/horror done well.</li>
		    </ul>
		   
		  
		</div>
	);
    }
}
export default Agenda;
