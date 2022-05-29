import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import NegativeTransfer from "../../content/projects/NegativeTransfer.json";
import ShapeBias from "../../content/projects/ShapeBias.json";
import Alice from "../../content/projects/Alice.json";
import Jabberwocky from "../../content/projects/Jabberwocky.json";

import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ProjectBlock = lazy(() => import("../../components/ProjectBlock"));

const Research = () => {
  return (
    <Container>
      <ScrollToTop />

      <ProjectBlock
        type="left"
        title={Jabberwocky.title}
        author={Jabberwocky.author}
	content={Jabberwocky.content}
	accept={Jabberwocky.accept}
	link={Jabberwocky.link}
        icon={Jabberwocky.icon}
        id="jabberwocky"
      />
      
      <ProjectBlock
        type="left"
        title={NegativeTransfer.title}
        author={NegativeTransfer.author}
	content={NegativeTransfer.content}
	accept={NegativeTransfer.accept}
	link={NegativeTransfer.link}
        icon={NegativeTransfer.icon}
        id="negative_transfer"
      />

      <ProjectBlock
              type="left"
        title={ShapeBias.title}
        author={ShapeBias.author}
	content={ShapeBias.content}
	accept={ShapeBias.accept}
	link={ShapeBias.link}
        icon={ShapeBias.icon}
        id="shape_bias"
      />
      <ProjectBlock
        type="left"
        title={Alice.title}
        author={Alice.author}
	content={Alice.content}
	accept={Alice.accept}
	link={Alice.link}
        icon={Alice.icon}
        id="alice"
      />
    </Container>
  );
};

export default Research;