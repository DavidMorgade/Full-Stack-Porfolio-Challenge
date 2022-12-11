import styled from 'styled-components';
// Language
import en from '~/languages/en.json';
import es from '~/languages/es.json';
import { useLanguageContext } from '~/context/useLangContext';

export default function InputSubmit(params) {
  // languages
  const [language] = useLanguageContext();
  const langText = language === 'en' ? en : es;
  return <StyledButton>{langText.FormSubmit}</StyledButton>;
}

const StyledButton = styled.button`
  all: unset;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: 0.229rem;
  color: ${({ theme }) => theme.text};
  position: relative;
  text-transform: uppercase;
  align-self: flex-end;
  z-index: 10;
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
