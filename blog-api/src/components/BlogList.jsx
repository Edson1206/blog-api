import PropTypes from 'prop-types';
import { List, ListItem } from '@mui/material';
import CardPost from './CardPost';

const BlogList = ({ posts, currentPage, postsPerPage, searchTerm }) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const filteredPosts = currentPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <List>
      {filteredPosts.map((post) => (
        <ListItem key={post.id} alignItems="flex-start">
          <CardPost post={post} />
        </ListItem>
      ))}
    </List>
  );
};

BlogList.propTypes = {
  posts: PropTypes.array,
  currentPage: PropTypes.number,
  postsPerPage: PropTypes.number, 
  searchTerm: PropTypes.string, 
}

export default BlogList;