import styled from 'styled-components';
// Images
import {
  CssIcon,
  GithubIcon,
  Rings,
  SassIcon,
  GitIcon,
  ReactIcon,
  NextIcon,
  NodeIcon,
  ExpressIcon,
  TypescriptIcon,
  Javascript,
  Golang,
  CSharp,
  Java,
} from '~/images/images';
// Components
import SkillCard from './SkillCard';
// Languages
import en from '~/languages/en.json';
import es from '~/languages/es.json';
import { useLanguageContext } from '~/context/useLangContext';

export default function Skills() {
  // Languages
  const [language] = useLanguageContext();
  const langText = language === 'en' ? en : es;
  return (
    <SkillsContainer>
      <SkillCard
        type="one"
        icon={Javascript}
        skill="Javascript"
      />
      <SkillCard
        type="two"
        icon={CssIcon}
        iconTwo={SassIcon}
        skill="CSS / SCSS"
      />
      <SkillCard
        type="two"
        icon={GitIcon}
        iconTwo={GithubIcon}
        skill="Git / GitHub"
      />
      <SkillCard
        type="two"
        icon={ReactIcon}
        iconTwo={NextIcon}
        skill="React / Next"
      />
      <SkillCard
        type="two"
        icon={NodeIcon}
        iconTwo={ExpressIcon}
        skill="Node / Express"
      />
      <SkillCard
        type="one"
        icon={TypescriptIcon}
        skill="Typescript"
      />
      <SkillCard
        type="one"
        icon={Golang}
        skill="Golang"
      />
      <SkillCard
        type="two"
        icon={Java}
        iconTwo={Java}
        skill="Java"
      />
      <SkillCard
        type="two"
        icon={CSharp}
        iconTwo={CSharp}
        skill="CSharp / .NET"
      />
    </SkillsContainer>
  );
}

const SkillsContainer = styled.section`
  margin: 0 1.2rem;
  margin-top: 12rem;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  row-gap: 2.4rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 1px;
    background-color: ${({ theme }) => theme.text};
    width: 100%;
    bottom: -4rem;
    @media (min-width: 768px) {
      height: 0;
    }
  }
  &::after {
    content: '';
    position: absolute;
    height: 12.9rem;
    background-image: url(${Rings});
    filter: ${({ theme }) => theme.filter};
    width: 50%;
    bottom: -10rem;
    right: 0;
  }
  @media (min-width: 768px) {
    margin: 0 3rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    row-gap: 5.2rem;
    &::after {
      width: 30%;
    }
  }
  @media (min-width: 1440px) {
    margin: 0 16.5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
