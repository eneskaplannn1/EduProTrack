import { css, styled } from "styled-components";

const variations = {
  column: css`
    flex-direction: column;
  `,
  row: css`
    flex-direction: row;
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
