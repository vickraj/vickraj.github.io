import styled from "styled-components";

export const LeftContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  font-size: 15px;
  margin: 1.5rem 0 2rem 0;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;


export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #fff;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Author = styled("p")`
  font-size: 18px;
  margin: 1.5rem 0 2rem 0;
  font-style: "italic";
`;

export const Accept = styled("h6")`
  font-size: 18px;
  margin: 1.5rem 0 2rem 0;
  font-weight: "bold"; 
`;



export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ProjectTitle = styled("h3")`
  font-size: 35px;
  line-height: 2.5rem;
  
  padding: 0.5rem 0;
  color: #fff;
  font-family: "Motiva Sans Bold", sans-serif;
`;


export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #fff;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 12px;
`;
