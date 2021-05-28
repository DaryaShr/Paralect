import { useSelector } from "react-redux";
import { reposTotalCountSelector } from "../../redux/repos";

import { StyledProfile } from "./styles";

import EmptyState from "../EmptyState";
import Data from "../Data";
import List from "../List";

const Profile = () => {
  const reposCount = useSelector(reposTotalCountSelector);

  return (
    <StyledProfile id="profile">
      <Data />
      {Boolean(reposCount) ? <List /> : <EmptyState type="noRepos" />}
    </StyledProfile>
  );
};

export default Profile;
