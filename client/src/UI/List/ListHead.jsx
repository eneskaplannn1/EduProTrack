import styled, { css } from "styled-components";

const variations = {
  class: css`
    grid-template-columns: 1fr 1fr 1fr;
  `,
};

const StyledListHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  font-size: 1rem;

  a {
    justify-self: end;
  }

  ${(props) => variations[props.variation]}
`;

export default StyledListHead;
