import styled from "styled-components";

export const StyledProfile = styled.div`
  width: 100%;
  flex: 1 0 auto;
  display: grid;
  grid-template-columns: 30% auto;

  @media (max-width: 1000px) and (min-width: 801px) {
    grid-template-columns: 40% auto;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;
