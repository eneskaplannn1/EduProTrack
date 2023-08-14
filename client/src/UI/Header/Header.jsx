import { styled } from "styled-components";

const StyledHeader = styled.header`
  /* background-color: var(--color-grey-0); */
  background-color: black;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.4rem;
`;

export default function Header() {
  return <StyledHeader>Header</StyledHeader>;
}
