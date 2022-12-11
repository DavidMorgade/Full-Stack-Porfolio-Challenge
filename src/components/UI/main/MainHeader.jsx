import styled from 'styled-components';
// Components
import SocialMedia from '~/components/Links/SocialMedia';
// Images
import {
  Rings,
  Circle,
  MobileProfile,
  ProfileMobile,
  Profile,
  Spanish,
  English,
  Sun,
  Moon,
} from '~/images/images';
// Hooks
import { useWindowSize } from '~/hooks/useWindowSize';
// Language hook
import { useLanguageContext } from '~/context/useLangContext';

export default function MainHeader({ toggleTheme, theme }) {
  const size = useWindowSize();
  // Gets the theme and conditionallly changes the icon
  const modeImg = theme === 'light' ? Moon : Sun;
  // Language context hook & handler
  const [language, setLanguage] = useLanguageContext();
  const languageHandler = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <Header id="header" rings={Rings} singleCircle={Circle}>
      {size.width < 768 && (
        <LangBtn onClick={languageHandler}>
          <LangSpanishText>{language.toUpperCase()}</LangSpanishText>
          <LangSpanish src={language === 'en' ? English : Spanish} />
        </LangBtn>
      )}
      {size.width >= 768 && (
        <LightAndDark onClick={toggleTheme}>
          <LightAndDarkImage src={modeImg} />
          <LightAndDarkText>{`${
            theme === 'light' ? 'DARK' : 'LIGHT'
          }`}</LightAndDarkText>
        </LightAndDark>
      )}
      <ContainerTextSocial profileImg={ProfileMobile}>
        <SocialMedia theme={theme} />
      </ContainerTextSocial>

      {size.width < 768 && (
        <LightAndDark onClick={toggleTheme}>
          <LightAndDarkImage src={modeImg} />
          <LightAndDarkText>{`${
            theme === 'light' ? 'DARK' : 'LIGHT'
          }`}</LightAndDarkText>
        </LightAndDark>
      )}
      {size.width >= 768 && (
        <LangBtn onClick={languageHandler}>
          <LangSpanishText>{language.toUpperCase()}</LangSpanishText>
          <LangSpanish src={language === 'en' ? English : Spanish} />
        </LangBtn>
      )}
    </Header>
  );
}
const ContainerTextSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  &::after {
    filter: ${({ theme }) => theme.dropShadow};
    position: absolute;
    background-repeat: no-repeat;
    top: -2rem;
    content: '';
    width: 17.4rem;
    height: 38.3rem;
    background-color: ${({ theme }) => theme.profileBackground};
    background-image: url(${(props) => props.profileImg});
    background-position: center bottom;
    filter: ${({ theme }) => theme.profileFilter};
    background-size: 120%;
    z-index: -1;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    &::after {
      right: 0;
      width: 32.2rem;
      height: 60rem;
      background-repeat: no-repeat;
      background-size: 120%;
      background-position: center bottom;
      top: -2rem;
    }
  }
  @media (min-width: 1440px) {
    &::after {
      background-size: 110%;
      top: -4rem;
      width: 44.5rem;
      height: 72rem;
    }
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  height: 38.3rem;
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${(props) => props.rings});
    background-repeat: no-repeat;
    background-position: right center;
    left: -60%;
    filter: ${({ theme }) => theme.filter};
  }
  &::after {
    content: '';
    width: 15%;
    rotate: 180deg;
    height: 100%;
    position: absolute;
    background-image: url(${(props) => props.singleCircle});
    background-repeat: no-repeat;
    background-position: right top;
    filter: ${({ theme }) => theme.filter};
    right: 0;
  }
  @media (min-width: 768px) {
    &::before {
      background-position: center top;
      top: 5rem;
    }
    &::after {
      width: 8%;
      bottom: -20rem;
    }
  }
  @media (min-width: 1440px) {
    margin: 3.9rem 16.5rem 0;
    &::before {
      top: 9rem;
    }
    &::after {
      width: 100%;
      background-position: 38rem top;
    }
  }
`;
const LangBtn = styled.button`
  all: unset;
  width: 8rem;
  height: 2.5rem;
  margin-top: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  z-index: 10;
  @media (min-width: 768px) {
    position: absolute;
    left: 28rem;
  }
`;
const LangSpanish = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  @media (min-width: 768px) {
    width: 3.2rem;
    height: 3.2rem;
  }
`;
const LangSpanishText = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;
const LightAndDark = styled.button`
  all: unset;
  cursor: pointer;
  width: 5rem;
  height: 2rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  @media (min-width: 768px) {
    position: absolute;
    width: 6rem;
    left: 38rem;
  }
  @media (min-width: 1440px) {
    width: 6rem;
    top: 0;
  }
`;
const LightAndDarkImage = styled.img`
  width: 40%;
`;
const LightAndDarkText = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  margin-top: 0.5rem;
`;
