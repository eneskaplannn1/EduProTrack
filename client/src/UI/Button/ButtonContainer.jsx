import { ClimbingBoxLoader } from "react-spinners";
import { css, styled } from "styled-components";

const variations = {
  column: css`
    flex-direction: column;
    color: red;
  `,
  row: css`
    flex-direction: row;
    color: blue;
  `,
};

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.6rem;

  ${(props) => variations[props.variation]}
`;

function ButtonContainer(props) {
  return <StyledButtonContainer>{props.children}</StyledButtonContainer>;
}

StyledButtonContainer.defaultProps = {
  variation: "row",
};

export default ButtonContainer;
