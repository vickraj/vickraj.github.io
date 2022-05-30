import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="50px" height="50px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={false}>
          <Row
	    
            justify="center"
            align="middle"

            style={{ paddingTop: "3rem" }}
          >
            <FooterContainer id='footer'>
	    <SocialLink
                href="https://scholar.google.com/citations?user=cbQq9JsAAAAJ&hl=en"
                src="scholar.jpg"
              />
	    <SocialLink
                href="tel:302-509-5684"
                src="phone.png"
              />
	    <SocialLink
                href="mailto:vick416@gmail.com"
                src="mail.png"
              />
              <SocialLink
                href="https://github.com/vickraj"
                src="github_white_2.png"
              />
              <SocialLink
                href="https://twitter.com/vickitidrum"
                src="twitter.png"
              />
              <SocialLink
                href="https://www.linkedin.com/in/vickram-rajendran-563710148/"
                src="linkedin.png"
              />
              <SocialLink
                href="https://www.facebook.com/vickram.rajendran.3"
                src="facebook.png"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
