import { styled } from "styled-components";

const StyledFormElement = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 2.5fr 2fr 3fr;
  font-size: 18px;
  border-bottom: 1px solid #58606b;
  padding-bottom: 0.8rem;
  font-size: 24px;

  label {
    font-size: bold;
  }
  div {
    color: red;
    margin-left: 1rem;
  }
  input,
  select {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    border: 1px solid #4b5563;
    background-color: #18212f;
    border-radius: 5px;
    justify-self: center;
    color: white;
    width: 90%;
  }

  input:focus,
  select:focus {
    border: 3px solid green;
  }
`;

function FormElement({ children }) {
  return <StyledFormElement>{children}</StyledFormElement>;
}

export default FormElement;
