import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import PostDetail from './pages/PostDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post/:postId" element={<PostDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;