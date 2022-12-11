import styled from 'styled-components';
// Components
import FailedIcon from './FailedIcon';
import Message from './Message';
import ResetForm from './ResetForm';

const Failed = ({ message, setFormSent }) => {
  return (
    <ErrorContainer>
      <FailedIcon />
      <Message>{message}</Message>
      <ResetForm setFormSent={setFormSent} />
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  background-color: ${({ theme }) => theme.form};
  width: 100%;
  height: 40rem;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 5rem;
`;

export default Failed;
