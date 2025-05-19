import { posts } from "./assets/posts";
import Homepage from "./components/Homepage";
import PostPage from "./components/PostPage";
//Import Context
import PostsContext from "./contexts/PostsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayouts from "./Layouts/DefaultLayouts";

function App() {
  console.log(posts);

  return (
    <PostsContext.Provider value={{ posts }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/posts" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsContext.Provider>
  );
}

export default App;
