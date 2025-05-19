//Import Use Context
import React, { useContext } from "react";
import PostsContext from "../contexts/PostsContext";
import PostCard from "./PostCard";

const PostsList = () => {
  let { posts } = useContext(PostsContext);

  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-md-6" key={post.id}>
          <PostCard
            id={post.id}
            title={post.title}
            category={post.category}
            body={post.body}
          />
        </div>
      ))}
    </div>
  );
};

export default PostsList;
