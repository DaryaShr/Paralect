import styled from "styled-components";

export const StyledPhotoWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  margin-top: 40px;

  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const StyledPhoto = styled.img`
  border-radius: 50%;
  width: 100%;
  margin: 0 auto;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledName = styled.div`
  display: flex;
  width: 65%;
  margin: 0 auto;
  margin-top: 30px;

  font-size: 26px;
  font-weight: 600;
  line-height: 130%;
  overflow-wrap: anywhere;

  @media (max-width: 800px) {
    width: 50%;
    justify-content: center;
    text-align: center;
  }
`;

export const StyledLogin = styled.a`
  display: flex;
  width: 65%;
  margin: 0 auto;
  margin-top: 15px;

  font-size: 18px;
  line-height: 120%;
  color: #0064EB;
  text-decoration: none;
  overflow-wrap: anywhere;

  @media (max-width: 800px) {
    width: 50%;
    justify-content: center;
    text-align: center;
  }
`;

export const StyledFollowers = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
  line-height: 120%;
`;

export const StyledFollowing = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;
  line-height: 120%;
`;

export const StyledStatistics = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 25px;
  width: 65%;
  font-size: 16px;

  @media (min-width: 320px) and (max-width: 450px) {
    width: 80%;
  }
  @media (min-width: 451px) and (max-width: 800px) {
    width: 65%;
  }
  @media (min-width: 801px) and (max-width: 1350px) {
    width: 80%;
  }

  @media (max-width: 1350px) {
    font-size: 14px;
  }
`;