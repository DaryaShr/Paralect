import styled from "styled-components";
import icon from "../../assets/icons/search-icon.svg";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: #0064eb;
  padding: 15px 3%;

  @media (max-width: 800px) {
    justify-content: center;
    padding: 15px 2%;
  }
`;

export const StyledInput = styled.input`
  margin-left: 1.5%;
  border: none;
  height: 40px;
  width: 500px;
  padding: 13px 50px;
  border-radius: 6px;
  letter-spacing: 0.01em;
  line-height: 1rem;

  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: left center;
  background-position-x: 20px;
  background-size: auto 40%;

  :focus {
    outline: none;
  }

  @media (max-width: 800px) and (min-width: 601px) {
    width: 400px;
  }

  @media (max-width: 600px) {
    width: 250px;
    height: 30px;
  }
`;
