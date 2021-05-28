import styled from "styled-components";

export const StyledPagination = styled.div`
position: absolute;
right: 50px;
bottom: 30px;
display: flex;

.repos-count {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #808080;
  margin-right: 25px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}

.pagination-item {
  display: flex;
  outline: none;
  color: #808080;
  margin: 0 10px;

  :hover {
    color: #0064eb;
    cursor: pointer;
  }
}

.pagination-previous,
.pagination-next {
  display: flex;
  padding: 2px 6px;
  outline: none;
  font-weight: 800;
  color: #808080;

  :hover {
    color: #0064eb;
    cursor: pointer;
  }
}

.break-me {
  cursor: default;
  color: #808080;
}

.active {
  display: flex;
  justify-content: center;
  border-radius: 3px;
  background: #0064eb;
  padding: 2px 0;
  width: 20px;
  color: white;

  :hover {
    color: white;
    cursor: pointer;
  }
}

@media (max-width: 800px) {
  position: static;
  margin-bottom: 20px;
  flex-direction: column;

  .repos-count {
    justify-content: center;
    margin-right: 0;
    margin-bottom: 20px;
  }
}
`;