import styled, { css } from "styled-components";

const variations = {
  class: css`
    grid-template-columns: 1fr 1fr 3fr;
  `,
  homework: css`
    grid-template-columns: 1fr 2.5fr 1fr 1fr;
  `,
};

const StyledListElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid white;
  padding: 1rem 0;

  a {
    color: #9c27b0;
    justify-self: end;
  }

  a:hover {
    color: #69db7c;
  }

  img {
    width: 4rem;
    border-radius: 50%;
  }

  ${(props) => variations[props?.variation]}
`;

export default StyledListElement;
