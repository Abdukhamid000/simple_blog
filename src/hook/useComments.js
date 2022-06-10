import http from "../utils/http";
import { useQuery } from "react-query";

const fetchComments = async (postId) => {
  const { data } = await http.get(`/posts/${postId}?_embed=comments`);

  return data;
};

const useComments = (postId) => {
  return useQuery("comments", () => fetchComments(postId));
};

export default useComments;
