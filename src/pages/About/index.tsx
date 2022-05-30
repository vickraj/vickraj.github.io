import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import EducationContent from "../../content/hobbies/EducationContent.json";
import InterestContent from "../../content/hobbies/InterestContent.json";
import HobbyContent from "../../content/hobbies/HobbyContent.json";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const About = () => {
  return (
  
    <Container>	
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={InterestContent.title}
        content={InterestContent.text}
	icon="combo_apl.png"
        id="About"
      />

      <ContentBlock
        type="left"
        title={EducationContent.title}
        content={EducationContent.text}
        icon="swat.jpg"
        id="Education"
      />

      <ContentBlock
        type="right"
        title={HobbyContent.title}
        content={HobbyContent.text}
        icon="library_vancouver.jpg"
        id="Hobby"
      />
      
    </Container>
  );
};

export default About;