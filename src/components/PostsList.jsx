//Import Use Context
import React, { useContext } from "react";
import PostsContext from "../contexts/PostsContext";

const PostsList = () => {
  let { posts } = useContext(PostsContext);

  return (
    <div>
      <h5>PostList.jsx</h5>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
