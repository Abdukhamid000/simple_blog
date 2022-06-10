import http from "../utils/http";
import { useMutation, useQueryClient } from "react-query";

const deletePost = async (postId) => {
  http.delete(`/posts/${postId}`);
};

const useDeletePost = (postId) => {
  const queryClient = useQueryClient();

  return useMutation(() => deletePost(postId), {
    onSettled: () => {
      queryClient.invalidateQueries("posts");
    },
  });
};

export default useDeletePost;
