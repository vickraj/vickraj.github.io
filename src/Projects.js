import React, {Component} from "react";

class Projects extends Component{
    render(){
	return (
 		<div>
		<h1> Projects </h1>
		<p> I've been a big fan of Terence
	    Tao's <a href = "https://terrytao.wordpress.com">
	    blog</a> for quite some time now, as I almost always find
	    myself agreeing with his career advice. In
	    particular, I've been resonating with his ideas of <a href =
	    "https://terrytao.wordpress.com/career-advice/make-your-work-available/"
	    target = "_blank">
	    keeping your work available</a> and <a href =
	    "https://terrytao.wordpress.com/career-advice/ask-yourself-dumb-questions-%E2%80%93-and-answer-them/"
	    target = "_blank">
	    asking yourself dumb questions</a> along with the related
		  posts.  </p>
		<p>
		  In that vein, the goal behind these projects is to,
		  as you might have guessed, keep my work available
		  and be an avenue to answer some of my dumb
		  questions. I firmly believe that the best way to
		  learn material is to interact with it in as many
		  ways as possible - as Tao says, this includes
		  examining it without assumptions, with more
		  assumptions, applying it in different contexts,
		  understanding why certain premises have to happen,
		  etc. By making projects, I simultaneously cement my
		  understanding of the material as well as give myself
		  a way to easily test any assumptions that I want to,
		  and answer any dumb questions that I might
		  have. Another especially nice aspect about using
		  large-form projects for this purpose is that it allows
		  me to <a href =
		  "https://en.wikipedia.org/wiki/Grok" target = "blank"> grok</a>
		  &nbsp;material through practical experience, and it
		  incentivizes me to make my thoughts more concrete,
		  readable and practical. Most of these projects will
		  eventually have an accompanying write-up that I'll
		  update over time that should chronicle some of the
		  things I was thinking about while doing them, as
		  well as any subsequent ideas I have upon
		  revisiting the topic.
		  
		</p>
		<p>
		  The projects below are roughly classified according
		  to date completed, but since I'm working on many of these
		  initial ones simultaneously and don't have writeups
		  for some of them yet, the dates are a little out of
		  order. Most of the code and papers can be found on
		  my <a href = "https://github.com/vickraj" target =
		  "_blank">github</a>.
		</p>
		<nav>
		  <ul>
		    <li> <a href = "#website">Website </a> </li>
		    <li> <a href = "#pythag">Search Algorithms for
			Primitive Pythagorean Triplets </a> </li>
		    <li> <a href = "#elliptic_curves">Elliptic Curve Algorithm Suite</a> </li>
		    <li> <a href = "#morse">Morse Theory and
			Linkages </a> </li>
		    <li> <a href = "#text_class">Text Classification of
			Horror Authors </a> </li>
		    <li> <a href = "#prngs">Cryptographically Secure
			Pseudo-Random Number Generators</a> </li>
		    <li> <a href = "#whg">Solving the World's Hardest
			Game</a> </li>
		  </ul>
		  </nav>
<div id = "projects">
  <div class = "proj_wrapper in_progress">
    <h3 align = "center" id = "website"> Website </h3>
    <h5 align = "center"> <i> Updated: June 28 2018 |
	Start: June 2018 |
	Status: Version 1.0 <br />
    </i> </h5>
    <img src = {"images/website.png"} class = "right" align =
	 "right"/>
    <div class = "goals">
      Goals: Learn React.js, Practice using HTML/CSS. Build a personal
      website that has links to most of my work. 
    </div>
    <div class = "overview">
      Overview: I wanted to learn how to use React.js as a views
      library and more about Node.js backends, so I decided that
      building a website would be a great way to get my hands dirty
      and start learning how these frameworks are used. After some
      research I decided to use ReactRouter as a way of making the
      website a Single Page Application (SPA), with links to downloads
      and other sites as other pages. Subsequent versions should
      include more javascript/dynamic views, more react-specific
      views, use AJAX for archives section, better
      css. This is a pretty small-form
      project without any potential for a write-up, so I will probably
      move this out of the projects section once I find a good place
      to put all of the smaller projects (or maybe I'll just put it
      lower than the others).
    </div>
    <p align = "center"> <a href = "" target = "_blank"> [Code]</a> </p>
    </div>
  <div class = "proj_wrapper in_progress">
		    
		  <h3 align = "center" id = "pythag"> Search
		  Algorithms for Primitive Pythagorean Triplets </h3>
		  <h5 align = "center"> <i> Updated: June 25 2018 |
		    Start: September 2016 |
		    Status: In Progress <br />
		  </i> </h5>
		  <img src = {"images/pythagorean.png"} class= "left"
		       align = "left"/> 
		  <div class = "goals">
		    
		      Goals: Practice undertaking actual research by
		      reading papers, cross-referencing, reading more
		      papers, and doing original work. Learn more
		      about optimization, matrix dynamics, algorithm
		      construction, complexity analysis. Reframe other
		      problems as search problems. Create an new
		      algorithm that is close to replicating current
		      performance on problems. 
		    
		  </div>
		  <div class = "overview">
		  Overview: Pythagorean triples have long been studied, and
		  appear in a surprising amount of contexts. However,
		  while several algorithms for generating all possible
		  triplets have been made, not much thought or
		  research has gone into specific algorithms that
		  generate triples satisfying certain conditions. In this
		  research we examine several interesting conditions
		  we may want pythagorean triangles to have, and posit
		  efficient algorithms to find triples satisfying
		  certain properties. We perform complexity analysis
		  on various search problems, and as a corollary,
		  create a new factoring algorithm.

		  </div>
		  <p align = "center"> 
		    [Initial Writeup Coming Soon]
		    </p>
		</div>
		<div class = "proj_wrapper half_complete">
		  <h3 align = "center" id = "elliptic_curves"> Elliptic Curve
		    Algorithms </h3>
		  <h5 align = "center"> <i> Updated: June 25 2018 |
		    Start: January 2018 |
		    Status: Version 1.0 <br />
		  </i> </h5>
		  <img src = {"images/ec.png"} class= "right"
		       align = "right"  width = "300px"/>
		  <div class = "goals">
		    Goals: Understand the practical considerations of
		    various algorithms for Elliptic Curves. Create a
		    toolbox for quick testing of specific
		    cases. Understand the theory behind EC algorithms
		    more clearly by implementing them. Practice coding
		    finite field arithmetic and polynomial manipulation
		    without Sage libraries. 
		  </div>
		  <div class = "overview">
		  Overview: This is an implementation of various algorithms on
		  Elliptic Curves, including
		  finding divisors to efficiently compute the Weil
		  Pairing, solving discrete logs on Elliptic Curves,
		  One Round Tripartite Diffie-Hellman Key exchange, the elliptic
		  curve method for factorization, primality testing,
		  the Elliptic Curve Digital Signature Algorithm,
		  regular computation with the Elliptic Curve group
		  law, and efficient computations in prime fields such
		  as computing inverses and square roots
		  (Tonelli-Shanks). Subsequent versions should include
		  full Galois field support, the MOV attack,
		  the SEA algorithm for point counting,
		  Bonneh-Franklin's Identity Based Encryption scheme,
		  and maybe some Attribute Based Encryption schemes as
		  well. 
		  </div>
		  <p align = "center"> <a href =
		  "https://github.com/vickraj/Elliptic-Curve-Crypto">
		  [Python Implementation]</a> [Initial Writeup Coming Soon] </p>
		</div>
		<div class = "proj_wrapper complete">
		  <h3 align = "center" id = "morse"> Morse Theory and
		    Linkages </h3>
		  <h5 align = "center"> <i> Updated: December 22 2017 |
		    Start: November 2017 |
		    Status: Probably Complete <br />
		  </i> </h5>
		  <img src = {"images/morse.png"} class= "left"
		       align = "left"/> <i> Updated: December 22 2017 |
		    Start: September 2017 <br />
		    Status: Complete <br />
		  </i>
		  <div class = "goals"> Goals: Learn about Morse Theory, find concrete applications of
		  Differential Topology, delve deeper into linkage
		    mechanics. </div>
		  <div class = "overview">
		  Overview: The final paper and presentation I wrote for my Computational
		  Geometry class (Fall 2017), in which Morse Theory is used to
		  determine the topology of the moduli spaces
		  of closed linkages. A linkage is a system of "bars",
		  connected to each other only at their endpoints,
		  such that each bar has a specified length. A
		  configuration of the linkage is a set of points in
		  the plane
		  determining where the endpoints of these bars are,
		  so we can imagine that a configuration is simply a
		  realization of these bars into the plane. We say
		  that two configurations are "the same" if one is an
		  affine transformation of the other, and the moduli
		  space is the configuration space modulo this
		  restriction. It is easy
		  enough to believe that the moduli space of a linkage
		  is (usually) smooth, since we can visually perturb
		  a configuration slightly without destroying it, and
		  that allows us to study the topology of the moduli
		  space with tools from differential topology.
		  </div>
		  <p align = "center"> <a href =
		  "https://github.com/vickraj/Morse_Theory_and_Linkages">
		  [Read More] </a> </p> 
		</div>
		<div class = "proj_wrapper complete">
		  <h3 align = "center" id = "text_class"> Text Classification of Horror
		    Authors</h3>
		  <h5 align = "center"> <i> Updated: December 20 2017 |
		    Start: November 2017 |
		    Status: Probably Complete <br />
		  </i> </h5>
		  <img src = {"images/topics_30.png"} class= "right"
		       align = "right"/>
		  <img src = {"images/nmf_topic.png"} class = "right"
		       align = "right"/>
		  <div class = "goals">
		    Goals: Learn basic topic modelling
		    algorithms. Learn basic sequence classification
		    algorithms. Compare and contrast various text
		    classification algorithms. Practice implementing
		    various Machine Learning algorithms. Try some
		    natural language processing. 
		  </div>
		  <div class = "overview">
		   
		  Overview: The final project for my Machine Learning class
		  (Fall 2017), in
		  which my partner and I implemented, compared, tuned,
		  optimized, and analyzed several algorithms for text
		  classification, the problem
		  of determining an author given a snippet of text
		  and a set of possible authors. We used standard algorithms like
		  Multinomial Naive-Bayes, Topic modelling with Latent Dirichlet
		  Allocation and Non-negative Matrix Factorization,
		  and sequential learners like an Long Short Term
		  Memory neural network and a Hidden Markov
		  Model. After comparing the performance and tuning
		  our models, we analyzed the results with both
		  log-loss and categorical cross-entropy, as well as
		  more general trends between the various classes of
		  models (sequential vs topic, discriminative vs
		  general). Our final results had over 80% average accuracy on
		  two different classifiers. 
		  </div>
		  <p align = "center"> [Contact me to see code] <a href =
		  "https://github.com/vickraj/TextClassification>">
		  [Read More] </a> </p>
		</div>
		<div class = "proj_wrapper">
		  <h3 align = "center" id = "prngs"> Cryptographically Secure
		    Pseudo-Random Number Generators </h3>
		  <h5 align = "center"> <i> Updated: November 25 2017 |
		    Start: November 2016 |
		    Status: Probably Complete <br />
		  </i> </h5>
		  <img src = {"images/counter.png"} class= "left"
		       align = "left"/>
		  <img src = {"images/fortuna.png"} class= "left"
		       align = "left"/>
		  <div class = "goals">
		    Goals: Learn about the commonly used pseudo-random
		    number generators. Understand how to define
		    "security" for a PRNG, and what proofs of security
		    look like. Understand why certain PRNG's are not
		    secure/common exploits against PRNG's. Understand
		    the cryptographically secure
		    PRNG's, and where they are used/when they are
		    needed to be used. 
		  </div>
		  <div class = "overview">
		  Overview: This project was inspired
		  after completing the <a href =
		  "https://medium.com/hackmit-stories/the-hackmit-2016-puzzle-3b7f9c97455b">
		  HackMIT 2016 Admissions Puzzle</a>, 
		  which is a series of coding, AI, and exploitation
		  challenges, gradually rising in difficulty,
		  developed by the HackMIT team. After solving a nice
		  xkcd riddle, performing NoSQL injection and breaking
		  a hash, and reading Backus-Naur form to code in an
		  entirely new language, the final challenge was to
		  predict the value of a random number
		  generator. Luckily they chose an insecure
		  pseudorandom number generator - Xorshift128+
		  (incidentally also used by Javascript's .random()),
		  and after dealing with <a href =
		  "https://medium.com/dailyjs/javascripts-number-type-8d59199db1b6">
		  Mantissa's</a> and more, we coded an SMT solver to
		  find the initial seed and predict the next random
		  number. After seeing the insecurity of this pseudo
		  RNG, we decided to make our final paper in my computer
		  security class (Fall 2016) about modern PRNG's and their
		  cryptographic security. A year later I expanded on
		  this work, and
		  presented this survey of cryptographically secure
		  pseudorandom number generators with proofs at the
		  senior conference poster presentation. 

		  </div>
		  <p align = "center"> <a href =
		  "https://github.com/vickraj/Secure-PRNG-s">[Read
		  More]</a> </p>
		</div>
		<div class = "proj_wrapper">
		  <h3 align = "center" id = "whg"> Solving the World's Hardest
		    Game </h3>
		  <h5 align = "center"> <i> Updated: May 9 2016 |
		    Start: April 2016 |
		    Status: Probably Complete <br />
		  </i> </h5>
		  <img src = {"images/WHGL2.png"} class= "right"
		       align = "right"/>
		  <img src = {"images/WHGL5.png"} class = "right" align
		       ="right"/>
		  <div class = "goals">
		    Goals: Practice reading code and modifying
		    existing implementations. Get a deeper
		    understanding of the hyperparameters of Approximate
		    Q-learning and implementations of it. Develop
		    small, non-learning enemy agents. Develop an agent
		    to beat levels of The World's Hardest Game.
		  </div>
		  <div class = "overview">
		  Overview: My partner and I use Approximate Q-Learning
		  to create an Agent that beats the popular flash game
		  <a href =
		  "http://www.coolmath-games.com/0-worlds-hardest-game">The
		    World's Hardest Game</a>. We modified enemies
		  behavior from UC Berkeley's open source pacman
		  implementation to create levels that resembled the
		  levels of the World's Hardest Game, and then
		  reskinned the sprites. Afterwards we implemented our
		  own version of approximate Q-learning, and trained
		  the agent on it to see how well it could beat our
		  duplicate levels. 
		  This was the final project for my Artificial
		  Intelligence class (Spring 2016). 
		  </div>
		  <p align = "center"> [Contact me to see code] <a href =
		  "https://github.com/vickraj/WorldsHardestGame"> [Read More] </a></p> 
		</div>
		  
		</div>
		</div>
	);
    }
}
export default Projects;
