import styled from "styled-components";

export const StyledTitle = styled.div`
  margin-top: 45px;
  font-size: 22px;
  white-space: pre-line;
  color: #808080;
  line-height: 140%;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
