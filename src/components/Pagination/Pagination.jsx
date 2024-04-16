import Pagination from 'react-js-pagination';
import StyledPagination from './Pagination.styled';

function Paging({ page, setPage }) {
  return (
    <StyledPagination>
      <Pagination
        activePage={page}
        itemsCountPerPage={8}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        prevPageText="<"
        nextPageText=">"
        onChange={setPage}
        hideFirstLastPages
      />
    </StyledPagination>
  );
}

export default Paging;
