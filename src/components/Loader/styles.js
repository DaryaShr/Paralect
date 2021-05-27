import styled, { css } from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #F9F9F9;

  ${props => props.isShown || css`
    display: none;
  `}
`;

export const StyledLoader = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #0064eb;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
