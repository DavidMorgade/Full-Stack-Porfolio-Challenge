import styled from 'styled-components';
// Background Image
import { Rings } from '~/images/images';
// Components
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';

export default function ContactSection({
  formLoading,
  setResponseMessage,
  setFormFailed,
  setFormSent,
}) {
  return (
    <ContactSectionStyled id="contact">
      <ContactHeader />
      <ContactForm
        setFormSent={setFormSent}
        setFormFailed={setFormFailed}
        setResponseMessage={setResponseMessage}
        formLoading={formLoading}
      />
    </ContactSectionStyled>
  );
}

const ContactSectionStyled = styled.aside`
  margin-top: 9.2rem;
  background-color: ${({ theme }) => theme.form};
  position: relative;
  &::after {
    content: '';
    position: absolute;
    background-image: url(${Rings});
    height: 14rem;
    width: 55rem;
    background-repeat: no-repeat;
    left: -30rem;
    bottom: -3rem;
    filter: ${({ theme }) => theme.filter};
  }
  @media (min-width: 768px) {
    padding: 0 16.1rem;
    position: relative;
    &::after {
      content: '';
      width: 100%;
      left: -40rem;
      bottom: -8rem;
    }
    &::before {
      content: '';
      position: absolute;
      height: 1px;
      width: 95%;
      background-color: ${({ theme }) => theme.text};
      bottom: -10rem;
      left: 2%;
    }
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 22rem;
    &::after {
      left: -20rem;
    }
    &::before {
      width: 81%;
      left: 10%;
    }
  }
`;
