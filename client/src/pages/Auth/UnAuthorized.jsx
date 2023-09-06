import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import BackButton from "../../UI/Button/BackButton";

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: #021329;
  font-size: 2rem;

  button {
    color: red;
    font-size: 2rem;
  }
`;

const UnAuthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <StyledSection>
      <h1>UnAuthorized</h1>
      <br />
      <p>You do not have access to the this page.</p>
      <br />
      <button onClick={goBack}>Click here to go back</button>
    </StyledSection>
  );
};

export default UnAuthorized;
