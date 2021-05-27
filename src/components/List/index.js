import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";

import {
  reposSelector,
  pageSelector,
  reposLengthSelector,
} from "../../redux/repos";
import { userSelector } from "../../redux/user";

import { getReposPerPage } from "../../redux/repos";

import ListItem from "./ListItem";

import {
  StyledListContainer,
  StyledTitle,
  StyledList,
  StyledPagination,
} from "./styles";

const List = () => {
  const [offset, setOffset] = useState(0);

  const user = useSelector(userSelector);
  const repos = useSelector(reposSelector);
  const pageCount = useSelector(pageSelector);
  const reposCount = useSelector(reposLengthSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setOffset(reposCount < 4 ? reposCount : 4);
    dispatch(getReposPerPage(user.login, 1));
  }, []);

  const handlePageClick = (data) => {
    let selected = data.selected + 1;
    let newOffset = Math.ceil(selected * 4);
    setOffset(newOffset > reposCount ? reposCount : newOffset);
    dispatch(getReposPerPage(user.login, selected));
  };

  return (
    <StyledListContainer id="list-container">
      <StyledTitle>Repositories ({reposCount})</StyledTitle>
      <StyledList id="list">
        {repos.map((item) => (
          <ListItem data={item} key={item.id} />
        ))}
      </StyledList>

      <StyledPagination id="pagination-block">
        <p className="repos-count">
          {repos.length < 4 ? "" : offset < 5 ? "1-" : offset - 3 + "-"}
          {offset} of {reposCount} items
        </p>
        {Boolean(pageCount < 2) || (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            pageClassName={"pagination-item"}
            previousClassName={"pagination-previous"}
            nextClassName={"pagination-next"}
            activeClassName={"active"}
          />
        )}
      </StyledPagination>
    </StyledListContainer>
  );
};

export default List;
