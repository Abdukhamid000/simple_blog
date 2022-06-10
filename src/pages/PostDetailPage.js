import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUpdatePost from "../hook/useUpdatePost";
import usePost from "../hook/usePost";
import useDeletePost from "../hook/useDeletePost";
import { useQueryClient } from "react-query";
import useComments from "../hook/useComments";

import * as Styled from "./style";

const PostDetailPage = () => {
  const { id } = useParams();
  const { isError, isLoading, data } = usePost(id);
  const mutation = useDeletePost(id);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { mutate: updatePost } = useUpdatePost(id);
  const { data: comments } = useComments(id);

  useEffect(() => {
    if (isDeleted) navigate("/");
  }, [isDeleted, navigate]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Opps!</h1>;

  const editPost = () => {
    setIsEdit(true);
    setTitle(data?.title);
    setBody(data?.body);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      title,
      body,
    };

    updatePost(updatedPost, {
      onSuccess: navigate("/"),
    });
  };

  return (
    <div>
      {isDeleted && <h4>Deleted</h4>}
      <h1>{data?.title}</h1>
      <p> {data?.body}</p>
      <button onClick={editPost}>Edit</button>
      <button
        onClick={() => {
          mutation.mutate({
            onSuccess: setIsDeleted(true),
            onSettled: queryClient.invalidateQueries("posts"),
          });
        }}
      >
        Delete
      </button>

      {isEdit ? (
        <form onSubmit={onSubmit}>
          Title
          <Styled.Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <h5>Body</h5>
            <textarea
              type="text"
              rows="5"
              cols="33"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <Styled.SubmitBtn type="submit">Submit</Styled.SubmitBtn>
        </form>
      ) : (
        <></>
      )}

      <div>
        {comments.comments.map((com) => (
          <p>{com}</p>
        ))}
      </div>
    </div>
  );
};

export default PostDetailPage;
