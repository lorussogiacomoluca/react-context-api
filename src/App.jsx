import { posts } from "./assets/posts";
import Homepage from "./components/Homepage";
import PostPage from "./components/PostPage";
//Import Context
import PostsContext from "./contexts/PostsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log(posts);

  return (
    <PostsContext.Provider value={{ posts }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </PostsContext.Provider>
  );
}

export default App;
