import styled from 'styled-components';
import SuccessIcon from './SuccessIcon';
import Message from './Message';

const Success = ({ message }) => {
  return (
    <SuccessContainer>
      <SuccessIcon />
      <Message>{message}</Message>
    </SuccessContainer>
  );
};

const SuccessContainer = styled.div`
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

export default Success;
