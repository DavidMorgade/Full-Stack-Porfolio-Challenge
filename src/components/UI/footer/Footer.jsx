import styled from 'styled-components';
import SocialMedia from '~/components/Links/SocialMedia';

export default function Footer({ theme }) {
  return (
    <StyledFooter>
      <SocialMedia theme={theme} />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.form};
  padding: 16rem 0 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 14rem 0 7rem;
  }
  @media (min-width: 1440px) {
    justify-content: space-between;

    & div {
      margin: 0;
      margin-right: 14rem;
    }
    & h1 {
      margin-left: 15rem;
    }
  }
`;
