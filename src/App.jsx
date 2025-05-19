import { posts } from "./assets/posts";
//Import Context
import PostsContext from "./contexts/PostsContext";
import { BrowserRouter, Routes, route } from "react-router-dom";

function App() {
  console.log(posts);
  return <h1>Homepage</h1>;

  <CountContext.Provider value={{ posts }}>
    <BrowserRouter></BrowserRouter>
  </CountContext.Provider>;
}

export default App;
