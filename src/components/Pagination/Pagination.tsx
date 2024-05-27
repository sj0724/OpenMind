import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import StyledPagination from './Pagination.styled';

function Paging({ page, total }) {
  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    navigate(`/list/?page=${newPage}`);
  };

  return (
    <StyledPagination>
      <Pagination
        activePage={page}
        itemsCountPerPage={8}
        totalItemsCount={total}
        pageRangeDisplayed={5}
        prevPageText="<"
        nextPageText=">"
        onChange={handlePageChange}
        hideFirstLastPages
      />
    </StyledPagination>
  );
}

Paging.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default memo(Paging);
