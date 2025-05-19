//Import Use Context
import React, { useContext } from "react";
import PostsContext from "../contexts/PostsContext";
import PostCard from "./PostCard";

const PostsList = () => {
  let { posts } = useContext(PostsContext);

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          category={post.category}
          body={post.body}
        />
      ))}
    </div>
  );
};

export default PostsList;
