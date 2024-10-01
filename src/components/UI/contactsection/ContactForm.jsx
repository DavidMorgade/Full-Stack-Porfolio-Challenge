import styled from 'styled-components';
// Hooks
import { useRef, useState } from 'react';
// Validate Functions
import { validateEmail, validateName } from '../../../helpers/validation';
// Components
import ContactField from './ContactField';
import InputSubmit from './InputSubmit';
import MessageField from './MessageField';
// Fetch
import axios from 'axios';
// Language
import en from '~/languages/en.json';
import es from '~/languages/es.json';
import { useLanguageContext } from '~/context/useLangContext';

const SERVER_URL = '/portfolio/sendmail';

export default function ContactForm({
  formLoading,
  setResponseMessage,
  setFormFailed,
  setFormSent,
}) {
  // languages
  const [language] = useLanguageContext();
  const langText = language === 'en' ? en : es;
  // Input values
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  // State Client side validation
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Client-side submit validation
    let isValid = true;
    if (!validateName(nameRef.current.value)) {
      setNameError(true);
      isValid = false;
    }
    if (!validateEmail(emailRef.current.value)) {
      setEmailError(true);
      isValid = false;
    }
    if (!validateName(messageRef.current.value)) {
      setMessageError(true);
      isValid = false;
    }
    if (!isValid) return;
    // Set loading and form sent status
    formLoading(true);
    setFormSent(true);
    // Data POST stored from ref
    const formData = {
      name: nameRef.current.value,
      html: messageRef.current.value,
      from: emailRef.current.value
    };
    // Send data to the backend
    axios
      .post(SERVER_URL, formData, {
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then((response) => {
        // Sets the message
        setResponseMessage(response.data.message);
        // Cancel loading state
        formLoading(false);
        // Response was OK
        setFormFailed(false);
      })
      .catch((err) => {
        setResponseMessage(err.message);
        formLoading(false);
        // Failed to submit
        setFormFailed(true);
      });
  };
  const changeHandlerName = () => {
    const { value } = nameRef.current;
    if (!validateName(value)) {
      setNameError(true);
      return;
    }
    setNameError(false);
  };
  const changeHandlerEmail = () => {
    const { value } = emailRef.current;
    if (!validateEmail(value)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };
  const changeHandlerMessage = () => {
    const { value } = messageRef.current;
    if (!validateName(value)) {
      setMessageError(true);
      return;
    }
    setMessageError(false);
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <ContactField
        onChange={changeHandlerName}
        forwardedRef={nameRef}
        field={langText.PlaceholderName}
        hasError={nameError}
      />
      <ContactField
        onChange={changeHandlerEmail}
        forwardedRef={emailRef}
        field={langText.PlaceholderEmail}
        hasError={emailError}
      />
      <MessageField
        onChange={changeHandlerMessage}
        hasError={messageError}
        forwardedRef={messageRef}
        field={langText.PlaceholderMessage}
      />
      <InputSubmit />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 5rem 1.6rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.text};
    bottom: -9.9rem;
  }
  @media (min-width: 768px) {
    background-image: none;
    &::after {
      height: 0;
    }
  }
  @media (min-width: 1440px) {
    margin: 7rem 0 0;
  }
`;
