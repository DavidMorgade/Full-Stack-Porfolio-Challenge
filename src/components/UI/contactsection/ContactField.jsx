import styled from 'styled-components';
// Hooks
import { useState } from 'react';

export default function ContactField({
  field,
  forwardedRef,
  onChange,
  hasError,
}) {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocusIn = () => {
    setIsFocus(true);
  };
  const handleFocusOut = (e) => {
    if (e.target.value === '') setIsFocus(false);
  };
  return (
    <InputContainer>
      <StyledLabel htmlFor={field}>{field}</StyledLabel>
      <StyledInputText
        maxLength="40"
        hasError={hasError}
        onChange={onChange}
        ref={forwardedRef}
        onBlur={handleFocusOut}
        onFocus={handleFocusIn}
        id={field}
        type="text"
      />
      {!isFocus && <Placeholder>{field}</Placeholder>}
      {hasError && <ErrorMessage>Sorry, invalid format here</ErrorMessage>}
    </InputContainer>
  );
}
// Error message displayed when an input is typed incorrectly
const ErrorMessage = styled.span`
  position: absolute;
  bottom: -2.5rem;
  right: 0;
  color: #ff6f5b;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: -0.17px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledLabel = styled.label`
  display: block;
  height: 0;
  visibility: hidden;
`;
const StyledInputText = styled.input`
  all: unset;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.22px;
  height: 4.3rem;
  color: ${({ theme }) => theme.text};
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.text}; /* Border bottom */
  padding-left: 2.4rem;
  ${({ hasError }) =>
    hasError &&
    `
    box-shadow: 0 1px 0 0 #FF6F5B;
    
  `}
`;
const Placeholder = styled.span`
  all: unset;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.22px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  opacity: 0.5;
  position: absolute;
  left: 2.4rem;
  pointer-events: none;
`;
