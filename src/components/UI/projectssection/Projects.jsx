import styled from 'styled-components';
// Components
import Contact from '~/components/Links/Contact';
import Card from './Card';
import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
} from '~/images/images';
// Language
import en from '../../../languages/en.json';
import es from '../../../languages/es.json';
import { useLanguageContext } from '../../../context/useLangContext';

export default function Projects() {
  const [language] = useLanguageContext();
  const langText = language === 'en' ? en : es;
  return (
    <ProjectSection>
      <TopContainer>
        <ProjectsHeading>{langText.Projects}</ProjectsHeading>
        <Contact />
      </TopContainer>
      <ProjectsContainer>
        <Card
          img={Project1}
          alt={langText.Form}
          title={langText.Form}
          technologies="Typescript CSS"
          project="https://typescript-dummyform.netlify.app/"
          github="https://github.com/DavidMorgade/All-FEM-Projects/tree/finished-projects/17-TYPESCRIPT-VITE%20form%20validation"
        />
        <Card
          img={Project2}
          alt={langText.Password}
          title={langText.Password}
          technologies="React Styled-Components"
          project="https://password-generator-lovat-gamma.vercel.app/"
          github="https://github.com/DavidMorgade/All-FEM-Projects/tree/finished-projects/15-REACT-Password-generator-main"
        />
        <Card
          img={Project3}
          title={langText.Space}
          technologies="NextJS"
          alt={langText.Space}
          project="https://space-tourism-page-rho.vercel.app/"
          github="https://github.com/DavidMorgade/All-FEM-Projects/tree/main/07-NEXTJS-Space-tourism-page-Frontendmentor-main"
        />
        <Card
          img={Project4}
          title={langText.Agency}
          technologies="React Styled-Components"
          alt={langText.Agency}
          project="https://creative-agency-single-page.vercel.app/"
          github="https://github.com/DavidMorgade/All-FEM-Projects/tree/main/13-REACT-Creative-Agency-single-page-main"
        />
        <Card
          img={Project5}
          title={langText.Tracker}
          technologies="React Styled Components"
          alt={langText.Tracker}
          project="https://ip-address-tracked-david-morgade.netlify.app/"
          github="https://github.com/DavidMorgade/All-FEM-Projects/tree/main/10-REACT-IP-Address-tracker-main"
        />
        <Card
          img={Project6}
          title={langText.Portfolio}
          alt={langText.Portfolio}
          technologies="React"
          project="https://single-page-design-portfolio-challenge.vercel.app/"
          github="https://github.com/DavidMorgade/All-FEM-Projects/tree/main/12-REACT-Single-page-design-Portfolio-main"
        />
      </ProjectsContainer>
    </ProjectSection>
  );
}

const ProjectSection = styled.section`
  margin: 12.1rem 1.6rem 0;
  @media (min-width: 768px) {
    margin: 9rem 3rem 0;
  }
  @media (min-width: 1440px) {
    margin: 12rem 16.5rem 0;
  }
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProjectsHeading = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4rem;
  letter-spacing: -1.14px;
  color: ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    font-size: 7.2rem;
    line-height: 7.2rem;
    letter-spacing: -2.05px;
  }
`;
const ProjectsContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  @media (min-width: 768px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  @media (min-width: 1440px) {
    margin-top: 8rem;
  }
  @media (min-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
