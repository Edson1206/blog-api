import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Button
              variant={currentPage === number ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => paginate(number)}
            >
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
  
  Pagination.propTypes = {
    postsPerPage: PropTypes.number,
    totalPosts: PropTypes.number, 
    paginate: PropTypes.func, 
    currentPage: PropTypes.number
  }
  
export default Pagination;