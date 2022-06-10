import React, { useState } from "react";
import useAddPost from "../hook/useAddPost";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mutation = useAddPost();

  const addPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: new Date(),
      title: title,
      body: body,
    };

    mutation.mutate(newPost);
    setBody("");
    setTitle("");
  };

  if (mutation.isSuccess) {
    setTimeout(() => {
      mutation.reset();
    }, 1000);
  }

  return (
    <form onSubmit={addPost}>
      {mutation.isSuccess && <h3>Added</h3>}
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
      />
      <input
        onChange={(e) => setBody(e.target.value)}
        value={body}
        type="text"
      />
      <button>addPost</button>
    </form>
  );
};

export default PostForm;
