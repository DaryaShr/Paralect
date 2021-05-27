import React, { useState } from "react";

import { StyledHeader, StyledInput } from "./styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import { useDispatch } from "react-redux";
import { getUser } from "../../redux/user";

const Header = (props) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(getUser(value));
    }
  };

  return (
    <StyledHeader>
      <Logo />
      <StyledInput
        name="search"
        type="text"
        value={value}
        placeholder="Enter GitHub username"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </StyledHeader>
  );
};

export default Header;
