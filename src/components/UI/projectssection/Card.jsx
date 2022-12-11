import styled from 'styled-components';
// Components
import View from '~/components/Links/View';
// Custom size hook
import { useWindowSize } from '~/hooks/useWindowSize';
// Language
import en from '~/languages/en.json';
import es from '~/languages/es.json';
import { useLanguageContext } from '~/context/useLangContext';

export default function Card({
  title,
  technologies,
  img,
  alt,
  project,
  github,
}) {
  const size = useWindowSize();
  const [language] = useLanguageContext();
  const langText = language === 'en' ? en : es;
  return (
    <ProjectCard>
      <ProjectImg>
        <img src={img} alt={alt} />
        {size.width >= 1440 && (
          <ViewContainer>
            <View href={project}>{langText.Project}</View>
            <View href={github}>{langText.Code}</View>
          </ViewContainer>
        )}
      </ProjectImg>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectTech>{technologies}</ProjectTech>
      {size.width < 1440 && (
        <ViewContainer>
          <View href={project}>{langText.Project}</View>
          <View href={github}>{langText.Code}</View>
        </ViewContainer>
      )}
    </ProjectCard>
  );
}

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  /* height: 39.8rem; */
  margin-bottom: 5.2rem;
  gap: 1rem;
  &:last-of-type {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    &:last-of-type {
      margin-bottom: 5.2rem;
    }
  }
  @media (min-width: 1440px) {
    position: relative;
  }
`;

const ProjectImg = styled.div`
  width: 100%;
  @media (min-width: 1440px) {
    position: relative;

    &:hover img {
      opacity: 0.25;
    }
    &:hover nav {
      opacity: 1;
    }
  }
  img {
    transition: opacity 0.5s ease;
    width: 100%;
  }
`;
const ProjectTitle = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.text};
  line-height: 3.2rem;
  text-transform: uppercase;
`;
const ProjectTech = styled.h4`
  margin: 0;
  font-family: 500;
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.lines};
`;
const ViewContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  @media (min-width: 1440px) {
    opacity: 0;
    transition: opacity 0.5s ease;
    flex-direction: column;
    position: absolute;
    align-self: center;
    top: 40%;
    left: 40%;
  }
`;
