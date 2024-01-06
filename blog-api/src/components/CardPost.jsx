import PropTypes from 'prop-types';
import { Typography, Grid, Button } from '@mui/material';

const CardPost = ({ post }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Typography>{`${post.body.substring(0, 100)}...`}</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button variant="contained" color="primary" href={`#post/${post.id}`}>
          Read More
        </Button>
      </Grid>
    </Grid>
  );
};

CardPost.propTypes = {
  post: PropTypes.object,
}

export default CardPost;