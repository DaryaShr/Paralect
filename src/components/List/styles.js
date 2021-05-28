import styled from "styled-components";

export const StyledListContainer = styled.div`
  width: 100%;
  display: flex;
  min-width: 0;
  flex-direction: column;
`;

export const StyledTitle = styled.div`
  display: flex;
  font-size: 32px;
  font-weight: 600;
  line-height: 130%;
  margin-top: 30px;
  margin-left: 50px;

  @media (max-width: 800px) {
    margin-left: 0;
    justify-content: center;
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    font-size: 27px;
  }
`;

export const StyledListItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 32px;
  background-color: white;
  border-radius: 6px;
  margin: 12px 0;

  .item-title {
    color: #0064eb;
    font-size: 24px;
    line-height: 120%;
    text-decoration: none;
    font-weight: 500;

    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
  }

  .item-description {
    margin-top: 15px;
    font-size: 16px;
    line-height: 120%;

    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
  }

  @media (max-width: 800px) {
    margin: 8px 0px;

    .item-title {
      font-size: 22px;
    }
    .item-description {
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    margin: 8px 0px;

    .item-title {
      font-size: 20px;
    }
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 50px;
  position: relative;

  @media (max-width: 800px) {
    margin: 12px 20px;
  }
`;
