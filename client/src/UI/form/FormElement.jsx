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
  input:focus,
  select {
    border: 1px solid #4b5563;
    background-color: #323d4f;
    border-radius: 5px;
    justify-self: center;
    border: none;
    outline: none;
    color: white;
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
    width: 90%;

    &focus {
      border: 3px solid green;
    }
  }
`;

function FormElement({ children }) {
  return <StyledFormElement>{children}</StyledFormElement>;
}

export default FormElement;
