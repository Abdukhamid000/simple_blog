import React from "react";
import usePosts from "../../hook/usePosts";
import PostForm from "../PostForm";
import SinglePost from "./singlePost/SinglePost";

const Posts = () => {
  const { isLoading, isError, data } = usePosts();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Oops!</h1>;

  return (
    <>
      <PostForm />
      <ul>
        {data?.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default Posts;
