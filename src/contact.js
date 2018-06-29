import React, {Component} from "react";

class Contact extends Component{
    render() {
	return (
		<div>
		<h1> Contact Me </h1>
		<p> I love talking about my work/Math/CS in general,
    so get in touch!
		</p>
		<div class = "row">
		  <div class = "cont_img_wrap">
		 <a class = "nodec" href='mailto:vick416@gmail.com'><img src='images/gmail.png' class='icon'></img>
            <p class = "nodec"> vick416@gmail.com</p>
		 </a>
		  </div>
		  <div class = "cont_img_wrap">
        <a class = 'nodec' href='https://www.facebook.com/vickram.rajendran.3'><img src='images/facebook.png' class='icon'></img>
            <p class = "nodec">Facebook</p>
        </a>
		  </div>
		  <div class = "cont_img_wrap">
        <a class = 'nodec' href='https://www.twitter.com/vickitidrum'><img src='images/twitter.png' class='icon'></img>
          <p class = "nodec">Twitter</p>
        </a>
		  </div>
		  <div class = "cont_img_wrap">
        <a class = "nodec"><img src='images/phone.png' class='icon'></img>
            <p class = "nodec">(302) 509-5684</p>
        </a>
		  </div>
		  <div class = "cont_img_wrap">
        <a class = "nodec" href='https://www.linkedin.com/in/vickram-rajendran-563710148/'><img src='images/linkedin.png' class='icon'></img>
            <p class = "nodec">LinkedIn <br/>(Under Construction)</p>
        </a>
	</div>
	</div>
		</div>
	);
    }
}
export default Contact;
