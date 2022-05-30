import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  Author,
  ContentWrapper,
  ServiceWrapper,
  ProjectTitle,
  MinTitle,
  Span,
  MinPara,
  Accept,
  CustomNavLinkSmall,
} from "./styles";


import { useHistory } from 'react-router-dom';

const LeftContentBlock = ({
  icon,
  title,
  author,
  content,
  accept,
  link,
  t,
  id,
}: ContentBlockProps) => {


  const history = useHistory();

  return (
    <LeftContentSection>
      <Fade>
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <ProjectTitle>{t(title)}</ProjectTitle>
              <Author>{t(author)}</Author>
	      <Content>{t(content)} </Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof link === "object" &&
                    link.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={111}>
			<CustomNavLinkSmall onClick= {()=> window.open(item.href, "_blank")}
			> <Span> {t(item.title)} </Span>
			</CustomNavLinkSmall>
                        </Col>
                      );
                    })}
                </Row>

              </ServiceWrapper>
	      		<Accept> {t(accept)} </Accept>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
