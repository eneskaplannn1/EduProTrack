import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  add: css`
    background-color: #fff;
    color: #1f1f35;

    &:hover {
      color: #2bee4f;
    }
  `,
  update: css`
    background: #4f46e5;
    color: #fff;

    &:hover {
      background-color: #3730a3;
    }
  `,
  login: css`
    background: #4f46e5;
    color: #fff;

    &:hover {
      background-color: #3730a3;
    }
  `,
  delete: css`
    background-color: #fa5252;
    color: #fff;

    &:hover {
      background-color: #c92a2a;
    }
  `,
  cancel: css`
    background-color: #18212f;
    border: 1px solid #374151;
    color: white;

    &:hover {
      background-color: #131a23;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  border-radius: 20px;

  transition: 0.4s ease;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "update",
  size: "small",
};

export default Button;
