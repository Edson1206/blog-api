import PropTypes from 'prop-types';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ totalPosts, postsPerPage, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(totalPosts / postsPerPage);

  return (
    <MuiPagination
      count={pageCount}
      page={currentPage}
      onChange={onPageChange}
      color="primary"
      sx={{ marginTop: 2, marginBottom: 4 }}
    />
  );
};


  
  Pagination.propTypes = {
    postsPerPage: PropTypes.number,
    totalPosts: PropTypes.number, 
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func, 
  }
  
export default Pagination;