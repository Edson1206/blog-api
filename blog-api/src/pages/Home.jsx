import { useState, useEffect } from 'react';
import { Container, Typography, List, TextField, InputAdornment, IconButton, Grid } from '@mui/material';
import fetchPosts from '../api/api';
import PostCard from '../components/PostCard';
import Pagination from '../components/Pagination';
import ClearIcon from '@mui/icons-material/Clear';

function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error('Error fetching submission:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(term) ||
      post.body.toLowerCase().includes(term)
    );

    setFilteredPosts(filtered);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredPosts(posts);
    setCurrentPage(1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: '#e3f2fd', minHeight: '100vh', paddingY: 4 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Typography variant="h4" align="center" gutterBottom>
            Blog Posts
          </Typography>

          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {searchTerm && (
                    <IconButton onClick={clearSearch} edge="end">
                      <ClearIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />

          <List>
            {currentPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </List>

          <Pagination
            totalPosts={filteredPosts.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
