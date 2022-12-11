import styled from 'styled-components';
// Hooks
import { useState, useRef } from 'react';
// Custom Size hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
// React Transition animations
import { CSSTransition } from 'react-transition-group';
// Animate.css library
import 'animate.css/animate.css';

export default function SkillCard({ skill, exp, icon, type, iconTwo }) {
  const size = useWindowSize();
  // Checks if its hovering to show icons
  const [isHovering, setIsHovering] = useState(false);
  // animation
  const nodeRef = useRef(null);
  const handleMouseIn = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames={{
        enter: 'animate__heartBeat',
        enterActive: 'animate__fadeIn',
      }}
      onEnter={() => setIsHovering(true)}
      onExited={() => setIsHovering(false)}
      in={isHovering}
      timeout={1000}
    >
      <Card onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
        <SkillName>{skill}</SkillName>
        <SkillExp>{exp}</SkillExp>
        {size.width >= 1440 && isHovering && (
          <IconContainer ref={nodeRef} className={type}>
            <SkillIcon src={icon} />
            {type === 'two' && <SkillIcon src={iconTwo} />}
          </IconContainer>
        )}
      </Card>
    </CSSTransition>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-start;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
    gap: 1.4rem;
  }
  @media (min-width: 1440px) {
    position: relative;
    align-items: center;
  }
`;

const SkillName = styled.h3`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4rem;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.text};
  margin: 0;
  @media (min-width: 768px) {
    font-size: 4.8rem;
    line-height: 5.6rem;
    letter-spacing: -1.5px;
  }
`;

const SkillExp = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.separation};
  margin: 0;
  @media (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`;

const IconContainer = styled.div`
  @media (min-width: 1440px) {
    background-color: ${({ theme }) => theme.body};
    min-width: 80%;
    position: absolute;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &.one {
      justify-content: center;
    }
    &.two {
      justify-content: space-evenly;
    }
  }
`;

const SkillIcon = styled.img`
  @media (min-width: 1440px) {
    width: 5rem;
    opacity: 1;
  }
`;
