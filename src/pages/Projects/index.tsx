import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";


import Website from "../../content/projects/Website.json";
import Elliptic from "../../content/projects/EllipticCurves.json";
import Morse from "../../content/projects/Morse.json";
import TextClass from "../../content/projects/TextClass.json";
import PRNG from "../../content/projects/PRNG.json";
import WHG from "../../content/projects/WHG.json";
import PPT from "../../content/projects/PPT.json";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ProjectBlock = lazy(() => import("../../components/ProjectBlock"));

const Projects = () => {
  return (
    <Container>
      <ScrollToTop />

      <ProjectBlock
        type="left"
        title={Website.title}
        author={Website.author}
	content={Website.content}
	accept={Website.accept}
	link={Website.link}	
        icon={Website.icon}
        id="website"
      />


      <ProjectBlock
        type="left"
        title={PPT.title}
        author={PPT.author}
	content={PPT.content}
	accept={PPT.accept}
	link={PPT.link}	
        icon={PPT.icon}
        id="ppt"
      />
      
      <ProjectBlock
        type="left"
        title={Elliptic.title}
        author={Elliptic.author}
	content={Elliptic.content}
	accept={Elliptic.accept}
	link={Elliptic.link}	
        icon={Elliptic.icon}
        id="elliptic"
      />

      <ProjectBlock
        type="left"
        title={Morse.title}
        author={Morse.author}
	content={Morse.content}
	accept={Morse.accept}
	link={Morse.link}	
        icon={Morse.icon}
        id="morse"
      />

      <ProjectBlock
        type="left"
        title={TextClass.title}
        author={TextClass.author}
	content={TextClass.content}
	accept={TextClass.accept}
	link={TextClass.link}	
        icon={TextClass.icon}
        id="textclass"
      />

      <ProjectBlock
        type="left"
        title={PRNG.title}
        author={PRNG.author}
	content={PRNG.content}
	accept={PRNG.accept}
	link={PRNG.link}	
        icon={PRNG.icon}
        id="prng"
      />

      <ProjectBlock
        type="left"
        title={WHG.title}
        author={WHG.author}
	content={WHG.content}
	accept={WHG.accept}
	link={WHG.link}	
        icon={WHG.icon}
        id="whg"
      />
    </Container>
  );
};

export default Projects;
