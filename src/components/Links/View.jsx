import styled from 'styled-components';

export default function View({ children, href }) {
  return (
    <StyledLink target="_blank" href={href}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled.a`
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
    transition: color 0.5s ease;
    &:hover {
      color: ${({ theme }) => theme.lines};
    }
  }
`;
