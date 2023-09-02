import { styled } from "styled-components";

const DetailContainer = styled.div``;

const DetailInfo = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;

  margin-bottom: 2rem;

  .pending span {
    color: #f3e33b;
  }
  .evaluating span {
    color: #345fdd;
  }
  .failed span {
    color: #ff0000;
  }
  .successful span {
    color: #00ff00;
  }
`;

const DetailImage = styled.div`
  margin-left: 15rem;
  img {
    width: 200px;
    border-radius: 50%;
  }
`;

const DetailItem = styled.li``;

export { DetailInfo, DetailContainer, DetailItem, DetailImage };
