import styled from 'styled-components';

export default function Message({ children }) {
  return <StyledMessage>{children}</StyledMessage>;
}

const StyledMessage = styled.p`
  line-height: 2.8rem;
  padding: 0 1rem;
  margin: 0;
  font-weight: 500;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.separation};
`;
