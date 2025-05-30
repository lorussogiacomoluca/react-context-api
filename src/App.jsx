import { posts } from "./assets/posts";
import Homepage from "./components/Homepage";
import PostsPage from "./components/PostsPage";
//Import Context
import PostsContext from "./contexts/PostsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayouts from "./Layouts/DefaultLayouts";
import { AlertProvider } from "./contexts/AlertContext";

function App() {
  console.log(posts);

  return (
    <AlertProvider>
      <PostsContext.Provider value={{ posts }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayouts />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/posts" element={<PostsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsContext.Provider>
    </AlertProvider>
  );
}

export default App;
