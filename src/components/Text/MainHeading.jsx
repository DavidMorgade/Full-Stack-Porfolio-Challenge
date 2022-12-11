import styled from 'styled-components';

export default function MainHeading({ children }) {
  return <Text>{children}</Text>;
}

const Text = styled.h1`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: -0.33px;
  margin: 0 2.5rem;
  @media (min-width: 768px) {
    margin: 0 3rem;
    font-size: 3.2rem;
    line-height: 3.2rem;
    letter-spacing: -0.44px;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`;
