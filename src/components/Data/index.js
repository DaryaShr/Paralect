import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user";

import {
  StyledPhoto,
  StyledWrapper,
  StyledPhotoWrapper,
  StyledName,
  StyledLogin,
  StyledFollowers,
  StyledFollowing,
  StyledStatistics,
} from "./styles";

import { ReactComponent as FollowersIcon } from "../../assets/icons/followers-icon.svg";
import { ReactComponent as FollowingIcon } from "../../assets/icons/following-icon.svg";

const Data = () => {
  const user = useSelector(userSelector);

  const roundValue = (value) => {
    if (value < 1000) return value;
    return (value / 1000).toFixed(1) + "k";
  };

  return (
    <StyledWrapper>
      <StyledPhotoWrapper>
        <StyledPhoto alt="avatar" src={user.avatar_url} />
      </StyledPhotoWrapper>

      <StyledName>{user.name || user.login}</StyledName>
      <StyledLogin href={user.html_url} target="_blank" rel="noreferrer">
        {user.login}
      </StyledLogin>

      <StyledStatistics>
        <StyledFollowers>
          <FollowersIcon className="statistics-icon" />
          {roundValue(user.followers) + " followers"}
        </StyledFollowers>
        <StyledFollowing>
          <FollowingIcon className="statistics-icon" />
          {roundValue(user.following) + " following"}
        </StyledFollowing>
      </StyledStatistics>
    </StyledWrapper>
  );
};

export default Data;
