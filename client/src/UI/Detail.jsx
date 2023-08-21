import { styled } from "styled-components";

const DetailContainer = styled.div``;

const DetailInfo = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;

  margin-bottom: 2rem;
`;
const DetailImage = styled.div`
  img {
    width: 200px;
    border-radius: 50%;
  }
`;

const DetailItem = styled.li``;

export { DetailInfo, DetailContainer, DetailItem, DetailImage };
