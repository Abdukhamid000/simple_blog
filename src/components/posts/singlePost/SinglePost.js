import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./style";

const SinglePost = ({ post }) => {
  return (
    <Styled.Card>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
      {/* <img src={post.image} width="200px" height="200px" alt="" /> */}
      <p>{post.body}</p>
    </Styled.Card>
  );
};

export default SinglePost;
