import { useQuery } from "react-query";
import http from "../utils/http";

const getPostById = async (postId) => {
  const { data } = await http.get(`/posts/${postId}`);
  return data;
};

const usePost = (postId) => {
  return useQuery(["posts", postId], () => getPostById(postId));
};

export default usePost;
