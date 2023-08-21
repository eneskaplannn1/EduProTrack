import styled from "styled-components";

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
`;

export default StyledListElement;
