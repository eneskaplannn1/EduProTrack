import styled, { css } from "styled-components";

const variations = {
  class: css`
    grid-template-columns: 1fr 1fr 1fr;
  `,
  student: css`
    grid-template-columns: 1fr 1fr 1fr;
  `,
  teacher: css`
    grid-template-columns: 1fr 1fr 1fr;
  `,
  homework: css`
    grid-template-columns: 1fr 2fr 1fr 1fr;
  `,
};

const StyledListHead = styled.ul`
  display: grid;
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
