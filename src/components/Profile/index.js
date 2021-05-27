import { useSelector } from "react-redux";
import { reposLengthSelector } from "../../redux/repos";

import { StyledProfile } from "./styles";

import EmptyState from "../EmptyState";
import Data from "../Data";
import List from "../List";

const Profile = () => {
  const repos = useSelector(reposLengthSelector);

  return (
    <StyledProfile id="profile">
      <Data />
      {Boolean(repos) ? <List /> : <EmptyState type="noRepos" />}
    </StyledProfile>
  );
};

export default Profile;
