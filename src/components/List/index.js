import { useSelector } from "react-redux";

import { reposSelector, reposTotalCountSelector } from "../../redux/repos";

import ListItem from "./ListItem";
import Pagination from "../Pagination";
import Loader from "../Loader";

import { StyledListContainer, StyledTitle, StyledList } from "./styles";

const List = () => {
  const repos = useSelector(reposSelector);
  const reposCount = useSelector(reposTotalCountSelector);

  return (
    <StyledListContainer id="list-container">
      <StyledTitle>Repositories ({reposCount})</StyledTitle>
      <StyledList id="list">
        <Loader type="reposLoader"/>
        {repos.map((item) => (
          <ListItem data={item} key={item.id} />
        ))}
      </StyledList>
      <Pagination />
    </StyledListContainer>
  );
};

export default List;
