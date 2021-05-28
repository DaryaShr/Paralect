import { useSelector } from "react-redux";
import { isFetchingUserSelector } from "../../redux/user";
import { isFetchingReposSelector, reposSelector } from "../../redux/repos";
import { StyledLoader, LoaderContainer } from "./styles";

const Loader = ({type}) => {
  const isFetchingUser = useSelector(isFetchingUserSelector);
  const isFetchingRepos = useSelector(isFetchingReposSelector);
  const repos = useSelector(reposSelector);

  let position = "absolute";
  let isLoading;
  
  switch (type) {
    case "userLoader":
      isLoading = isFetchingUser;
      break;
    case "reposLoader":
      if (!Boolean(repos.length))
        position = "static"
      isLoading = isFetchingRepos;
      break;
  }

  return (
    <LoaderContainer isShown={isLoading} position={position} id="loader">
      <StyledLoader />
    </LoaderContainer>
  );
};

export default Loader;
