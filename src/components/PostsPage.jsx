//Import Use Context
import React, { useContext } from "react";
import PostsContext from "../contexts/PostsContext";

import PostsList from "./PostsList";

const PostsPage = () => {
  let postsList = useContext(PostsContext);
  console.log(postsList);
  return (
    <div>
      <h2>Posts Page</h2>
      <PostsList />
    </div>
  );
};

export default PostsPage;
