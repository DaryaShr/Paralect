import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";

import {
  reposSelector,
  pageSelector,
  reposTotalCountSelector,
  getReposPerPage
} from "../../redux/repos";
import {usernameSelector} from "../../redux/user";

import { StyledPagination } from "./styles";

const Pagination = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  const username = useSelector(usernameSelector);
  const repos = useSelector(reposSelector);
  const pageCount = useSelector(pageSelector);
  const reposCount = useSelector(reposTotalCountSelector);

  useEffect(() => {
    dispatch(getReposPerPage(username, page));
  }, []);

  useEffect(() => {
    let newOffset = Math.ceil(page * 4);
    setOffset((reposCount < 4) || (newOffset > reposCount) ? reposCount : newOffset);
  }, [repos]);

  const handlePageClick = (data) => {
    let selected = data.selected + 1;
    setPage(selected);
    dispatch(getReposPerPage(username, selected));
  };

  return (
    <StyledPagination id="pagination-block">
      <p className="repos-count">
        {repos.length === 1 ? "" : ((offset - repos.length + 1) + "-")}
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
  );
};

export default Pagination;
