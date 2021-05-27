import { useSelector } from "react-redux";
import { errorUserSelector, userSelector } from "../../redux/user";

import { StyledContainer } from "./styles";

import EmptyState from "../EmptyState";
import Profile from "../Profile";
import Loader from "../Loader";

const Container = () => {
  const user = useSelector(userSelector);
  const error = useSelector(errorUserSelector);

  return (
    <StyledContainer id="container">
      <Loader />
      {user ? <Profile /> : <EmptyState type={error ? "error" : "initial"} />}
    </StyledContainer>
  );
};

export default Container;
