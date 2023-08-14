import { css, styled } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      margin: 0.6rem 0;
      text-align: center;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1rem;
      font-weight: 500;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1rem;
      font-weight: 100;
      text-align: center;
      margin: 0.4rem;
    `}
  ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 0.8rem;
      font-weight: lighter;
      text-align: center;
      color: #626161;
    `}

  line-height: 1.4rem;
`;
export default Heading;
