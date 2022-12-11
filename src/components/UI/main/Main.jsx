import styled from 'styled-components';
// Components
import IntroSection from '../introsection/IntroSection';
import MainHeader from './MainHeader';

export default function Main({ toggleTheme, theme }) {
  return (
    <StyledMain id="main">
      <MainHeader theme={theme} toggleTheme={toggleTheme} />
      <IntroSection />
    </StyledMain>
  );
}

const StyledMain = styled.main``;
