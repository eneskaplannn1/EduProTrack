import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledBack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  cursor: pointer;
`;

function BackButton() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "inline-block" }}>
      <StyledBack onClick={() => navigate(-1)}>
        <ImArrowLeft2 />

        <span>Go back</span>
      </StyledBack>
    </div>
  );
}

export default BackButton;
