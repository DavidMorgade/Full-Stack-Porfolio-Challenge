import styled from 'styled-components';
// Components
import IntroSection from '../introsection/IntroSection';
import Projects from '../projectssection/Projects';
import Skills from '../skillssection/Skills';
import MainHeader from './MainHeader';

export default function Main({ toggleTheme, theme }) {
  return (
    <StyledMain id="main">
      <MainHeader theme={theme} toggleTheme={toggleTheme} />
      <IntroSection />
      <Skills />
      <Projects />
    </StyledMain>
  );
}

const StyledMain = styled.main``;
