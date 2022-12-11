import styled from 'styled-components';

export default function FailedIcon(params) {
  return (
    <StyledIcon
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
    >
      <circle
        className="path circle"
        fill="none"
        stroke="#D06079"
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <line
        className="path line"
        fill="none"
        stroke="#D06079"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="34.4"
        y1="37.9"
        x2="95.8"
        y2="92.3"
      />
      <line
        className="path line"
        fill="none"
        stroke="#D06079"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="95.8"
        y1="38"
        x2="34.4"
        y2="92.2"
      />
    </StyledIcon>
  );
}

const StyledIcon = styled.svg`
  width: 100px;
  display: block;
  margin: 40px auto 0;
  .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    &.circle {
      -webkit-animation: dash 0.9s ease-in-out;
      animation: dash 0.9s ease-in-out;
      @keyframes dash {
        0% {
          stroke-dashoffset: 1000;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }
    }
    &.line {
      stroke-dashoffset: 1000;
      -webkit-animation: dash 0.9s 0.35s ease-in-out forwards;
      animation: dash 0.9s 0.35s ease-in-out forwards;
      @keyframes dash {
        0% {
          stroke-dashoffset: 1000;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }
    }
    &.check {
      stroke-dashoffset: -100;
      -webkit-animation: dash-check 0.9s 0.35s ease-in-out forwards;
      animation: dash-check 0.9s 0.35s ease-in-out forwards;
      @keyframes dash-check {
        0% {
          stroke-dashoffset: -100;
        }
        100% {
          stroke-dashoffset: 900;
        }
      }
    }
  }
`;
