import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import fetchPosts from '../api/api';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        const selectedPost = data.find((item) => item.id === Number(postId));

        if (selectedPost) {
          setPost(selectedPost);
        } else {
          // Handle post not found
        }
      } catch (error) {
        console.error('Error fetching submission:', error);
      }
    };

    fetchData();
  }, [postId]);

  if (!post) {
    // Handle loading state or post not found
    return (
      <Container sx={{ backgroundColor: '#e3f2fd', minHeight: '100vh', paddingY: 30 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Loading...
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ backgroundColor: '#e3f2fd', minHeight: '100vh', paddingY: 30 }}>
      <Grid sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '16px' }}>
      <Typography variant="h4" align="center" gutterBottom >
        {post.title}
      </Typography>
      <Typography align='justify'>{post.body}</Typography>
      </Grid>
    </Container>
  );
};

export default PostDetail;