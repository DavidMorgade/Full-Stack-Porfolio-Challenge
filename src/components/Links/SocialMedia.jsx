import styled from 'styled-components';
import MainHeading from '../Text/MainHeading';
import {
  Github,
  Twitter,
  Frontend,
  Linkedin,
  TwitterLight,
  GithubLight,
  GithubIcon,
  LinkedinLight,
  FrontendLight,
  CodigoMorga
} from '../../images/images';
// React Scroll package
import { animateScroll as scroll } from 'react-scroll';

export default function SocialMedia({ theme }) {
  return (
    <>
      <HeadingLink onClick={scroll.scrollToTop}>
        <MainHeading>davidmorgade</MainHeading>
      </HeadingLink>
      <IconContainer>
        <SocialLink href="https://github.com/DavidMorgade" target="_blank">
          <SocialIcon
            alt="Github Icon"
            src={theme === 'light' ? GithubIcon : Github}
          />
        </SocialLink>
        <SocialLink
          href="https://www.frontendmentor.io/profile/DavidMorgade"
          target="_blank"
        >
          <SocialIcon
            alt="Frontendmentor Icon"
            src={theme === 'light' ? FrontendLight : Frontend}
          />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/davidmorgade/"
          target="_blank"
        >
          <SocialIcon
            alt="LinkedIn Icon"
            src={theme === 'light' ? LinkedinLight : Linkedin}
          />
        </SocialLink>
        <SocialLink href="https://twitter.com/MeSabeAgridulce" target="_blank">
          <SocialIcon
            alt="Twitter Icon"
            src={theme === 'light' ? TwitterLight : Twitter}
          />
        </SocialLink>
        <SocialLink href="https://codigomorga.es/blog" target="_blank">
          <SocialIcon
            alt="Blog Icon"
            src={CodigoMorga}
          />
        </SocialLink>
      </IconContainer>
    </>
  );
}
const HeadingLink = styled.a`
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15.4rem;
  @media (min-width: 768px) {
    margin: 0 3rem;
    width: 19.25rem;
  }
  @media (min-width: 1440px) {
    width: 23rem;
  }
`;
const SocialLink = styled.a`
  width: 2rem;
  height: 2rem;
  @media (min-width: 768px) {
    width: 2.4rem;
    height: 2.4rem;
  }
  @media (min-width: 1440px) {
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    width: 3.2rem;
    height: 3.2rem;
    &:hover {
      transform: scale(120%);
      cursor: pointer;
    }
  }
`;

const SocialIcon = styled.img`
  width: 100%;
  height: 100%;
`;
