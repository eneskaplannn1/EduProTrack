import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledBack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1rem;
  width: 300px;

  cursor: pointer;

  &:hover {
    color: green;
  }
`;

function BackButton() {
  const navigate = useNavigate();
  return (
    <StyledBack onClick={() => navigate(-1)}>
      <ImArrowLeft2 />

      <span>Go back</span>
    </StyledBack>
  );
}

export default BackButton;
