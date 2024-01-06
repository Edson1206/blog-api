import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
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
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Loading...
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        {post.title}
      </Typography>
      <Typography>{post.body}</Typography>
    </Container>
  );
};

export default PostDetail;