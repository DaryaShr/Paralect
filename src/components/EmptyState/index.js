import React from "react";

import { StyledTitle, StyledWrapper } from "./styles";
import { ReactComponent as UserIcon } from "../../assets/icons/user-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as ReposIcon } from "../../assets/icons/repos-icon.svg";

const EmptyState = (props) => {
  const { type } = props;

  return (
    <StyledWrapper id="empty-state">
      {
        {
          error: <UserIcon className="icon" />,
          initial: <SearchIcon className="icon" />,
          noRepos: <ReposIcon className="icon" />,
        }[type]
      }
      <StyledTitle>
        {
          {
            error: "User not found",
            initial: `Start with searching\na GitHub user`,
            noRepos: "Repository list is empty",
          }[type]
        }
      </StyledTitle>
    </StyledWrapper>
  );
};

export default EmptyState;
