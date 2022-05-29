import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";


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
        title={AboutContent.title}
        content={AboutContent.text}
        icon="vickram.png"
        id="About"
      />
      
    </Container>
  );
};

export default About;