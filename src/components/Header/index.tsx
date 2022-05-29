import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

import React, {useCallback} from 'react'

import pdfFile from "../../content/Resume/resume.pdf"

import {useHistory, Link} from 'react-router-dom'




const Header = ({ t }: any) => {

  const history = useHistory();
  const homeHandle= useCallback(() => history.push('/'), [history]);
  const aboutHandle= useCallback(() => history.push('/about'), [history]);
  const projectsHandle= useCallback(() => history.push('/projects'), [history]);
   const researchHandle= useCallback(() => history.push('/research'), [history]);
  const articlesHandle= useCallback(() => history.push('/articles'), [history]);
  
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
      
        <CustomNavLinkSmall onClick={homeHandle}>
          <Span>{t("Home")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={aboutHandle}>
          <Span>{t("About Me")}</Span>
        </CustomNavLinkSmall>
	<CustomNavLinkSmall onClick={researchHandle}>
          <Span>{t("Research")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={projectsHandle}>
          <Span>{t("Projects")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall href = { pdfFile }>
          <Span>{t("Resume")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall 
          style={{ width: "180px" }}
          onClick={() => scrollTo("footer")}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
      <Row justify="end">
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
