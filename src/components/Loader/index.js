import { useSelector } from "react-redux";
import { isFetchingUserSelector } from "../../redux/user";
import { isFetchingReposSelector } from "../../redux/repos";
import { StyledLoader, LoaderContainer } from "./styles";

const Loader = () => {
  const isFetchingUser = useSelector(isFetchingUserSelector);
  const isFetchingRepos = useSelector(isFetchingReposSelector);
  const isLoading = isFetchingUser || isFetchingRepos;

  return (
    <LoaderContainer isShown={isLoading} id="loader">
      <StyledLoader />
    </LoaderContainer>
  );
};

export default Loader;
