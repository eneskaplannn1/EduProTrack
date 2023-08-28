import styled from "styled-components";

const StyledListHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  a {
    justify-self: end;
  }
`;

export default StyledListHead;
