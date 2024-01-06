import { useEffect, useState } from "react"
import fetchPosts from "../api/api";
import { Container, TextField, Typography } from '@mui/material'
import Pagination from "../components/Pagination";
import BlogList from "../components/BlogList";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching submission:', error);
      }
    }
    fetchData();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  return (
    <Container>
      <Typography variant='h4' align='center' gutterBottom>
        Blog Posts
      </Typography>
      <TextField
        label='Search'
        variant='outlined'
        fullWidth
        margin='normal'
        value={searchTerm}
        onChange={handleSearch}
      />
      <BlogList 
        posts={posts} 
        currentPage={currentPage} 
        postsPerPage={postsPerPage} 
        searchTerm={searchTerm} 
      />
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Container>
  )
}

export default Home