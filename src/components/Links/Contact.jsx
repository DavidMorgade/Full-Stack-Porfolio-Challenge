import styled from 'styled-components';
// Scroll Anchor
import { Link } from 'react-scroll';
// Language
import en from '../../languages/en.json';
import es from '../../languages/es.json';
import { useLanguageContext } from '../../context/useLangContext';

export default function Contact() {
  const [language] = useLanguageContext();
  const langText = language === 'en' ? en : es;
  return (
    <FormLink
      to="contact"
      spy={true}
      smooth={true}
      offset={-50}
      duration={1000}
    >
      {langText.Contact}
    </FormLink>
  );
}

const FormLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: 0.229rem;
  color: ${({ theme }) => theme.text};
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.lines};
    bottom: -1rem;
    left: 0;
  }
  @media (min-width: 1440px) {
    transition: color 0.5s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.lines};
    }
  }
`;
