import StyledPagination from "./Pagination.styled";
import Pagination from "react-js-pagination";

const Paging = ({ page, setPage }) => {
  return (
    <StyledPagination>
      <Pagination
        activePage={page}
        itemsCountPerPage={8}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={setPage}
        hideFirstLastPages={true}
      />
    </StyledPagination>
  );
};

export default Paging;
