import http from "../utils/http";
import { useMutation } from "react-query";

const useUpdatePost = (postId) => {
  return useMutation((variables) => {
    http.put(`/posts/${postId}`, variables);
  });
};

export default useUpdatePost;
