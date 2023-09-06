import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledBack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 8rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  cursor: pointer;
  transition: color 0.8s ease;

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
