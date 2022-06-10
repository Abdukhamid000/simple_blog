import http from "../utils/http";
import { useMutation, useQueryClient } from "react-query";

const addPost = async (post) => {
  http.post("/posts", post);
};

const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation(addPost, {
    onSettled: () => {
      queryClient.invalidateQueries("posts");
    },
  });
};

export default useAddPost;
