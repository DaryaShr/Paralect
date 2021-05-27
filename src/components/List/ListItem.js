import { StyledListItem } from "./styles";

const ListItem = ({ data }) => {
  return (
    <StyledListItem>
      <a
        href={data.html_url}
        target="_blank"
        rel="noreferrer"
        className="item-title"
      >
        {data.name}
      </a>
      <div className="item-description">{data.description || data.name}</div>
    </StyledListItem>
  );
};

export default ListItem;
