import { ImArrowLeft2 } from "react-icons/im";
import { styled } from "styled-components";

const StyledBack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  cursor: pointer;
`;

function BackButton() {
  return (
    <StyledBack>
      <ImArrowLeft2 />
      <span>Go back</span>
    </StyledBack>
  );
}

export default BackButton;
