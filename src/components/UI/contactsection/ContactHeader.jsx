import styled from 'styled-components';
// Language
import en from '~/languages/en.json';
import es from '~/languages/es.json';
import { useLanguageContext } from '~/context/useLangContext';

export default function ContactHeader(params) {
  const [language] = useLanguageContext();
  const langText = language === 'en' ? en : es;
  return (
    <StyledHeader>
      <ContactHeading>{langText.FormHeading}</ContactHeading>
      <ContactDescription>{langText.FormText}</ContactDescription>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0rem 1.6rem 0;
  padding-top: 6rem;
  gap: 2rem;
  @media (min-width: 1440px) {
    text-align: left;
    align-items: flex-start;
  }
`;

const ContactHeading = styled.h3`
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
  @media (min-width: 1440px) {
    font-size: 8.8rem;
    line-height: 8.8rem;
    letter-spacing: -2.5px;
    margin-bottom: 1.6rem;
  }
`;
const ContactDescription = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`;
