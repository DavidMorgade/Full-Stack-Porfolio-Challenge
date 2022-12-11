import styled from 'styled-components';
// Custom Hook for sizes
import { useWindowSize } from '../../../hooks/useWindowSize';
// Components
import Contact from '~/components/Links/Contact';
// Language
import es from '../../../languages/es.json';
import en from '../../../languages/en.json';
import { useLanguageContext } from '../../../context/useLangContext';

export default function IntroSection(params) {
  const [language, setLanguage] = useLanguageContext();
  const langText = language === 'en' ? en : es;
  const size = useWindowSize();
  return (
    <StyledSection>
      <IntroductionHeading>
        {/* Renders the heading on different ways depending on the size/language */}
        {langText.Intro.First}{' '}
        {((size.width >= 768 && size.width < 1440) || language === 'es') && (
          <br />
        )}{' '}
        {langText.Intro.Second}{' '}
        <span
          style={{
            display: `${
              size.width < 768 || size.width >= 1440 ? 'block' : 'inline'
            }`,
          }}
        >
          {langText.Intro.Third} <HeadingName>David Morgade.</HeadingName>
        </span>
      </IntroductionHeading>
      <DescriptionText>{langText.DescriptionText}</DescriptionText>
      <Contact />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin: 4rem 1.2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    background-color: ${({ theme }) => theme.text};
    width: 100%;
    bottom: -8rem;
  }
  @media (min-width: 768px) {
    align-items: flex-start;
    margin: -32rem 3.2rem 15rem;

    &::after {
      bottom: -8rem;
    }
  }
  @media (min-width: 1440px) {
    margin: -26rem 16.5rem 28rem;

    &::after {
      bottom: -15rem;
    }
  }
`;

const IntroductionHeading = styled.h2`
  font-weight: 700;
  font-size: 4rem;
  line-height: 4rem;
  letter-spacing: -1.14px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  position: relative;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 7.2rem;
    line-height: 7.2rem;
    letter-spacing: -2.05px;
  }
  @media (min-width: 1440px) {
    font-size: 8.8rem;
    line-height: 8.8rem;
    letter-spacing: -2.5px;
  }
`;
const HeadingName = styled.span`
  position: relative;
  display: inline-block;
  &::after {
    position: absolute;
    content: '';
    height: 4px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.lines};
  }
  @media (min-width: 768px) {
    text-align: left;
    display: block;
  }
  @media (min-width: 1440px) {
    display: inline;
  }
`;
const DescriptionText = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  text-align: center;
  color: ${({ theme }) => theme.separation};
  @media (min-width: 768px) {
    text-align: left;
    width: 44.9rem;
    font-size: 1.8rem;
    line-height: 2.8rem;
    margin-bottom: 3.4rem;
  }
  @media (min-width: 1440px) {
    margin-bottom: 6.6rem;
  }
`;
