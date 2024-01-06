import { PropTypes } from 'prop-types';
import { ListItem, Typography, Grid, Button } from '@mui/material';

const PostCard = ({ post }) => {
  return (
    <ListItem sx={{ paddingY: 2 }}>
      <Grid container spacing={2} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '16px', alignItems: 'flex-end' }}>
        <Grid item xs={12} sm={8}>
          <Typography variant="h6">
            {post.title}
          </Typography>
          <Typography>
            {post.body.length > 75 ? `${post.body.slice(0, 75)}...` : post.body}
          </Typography>
        </Grid>
        <Grid item xs='auto' sm={4} sx={{ textAlign: 'right' }}>
          <Button variant="outlined" href={`/post/${post.id}`}>
            Read More
          </Button>
        </Grid>
      </Grid>
    </ListItem>
  );
};


PostCard.propTypes = {
  post: PropTypes.object,
}

export default PostCard;