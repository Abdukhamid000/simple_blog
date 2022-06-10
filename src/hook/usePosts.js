import { useQuery } from "react-query";
import http from "../utils/http";

const getPosts = async () => {
  const { data } = await http.get("/posts");
  return data;
};

const usePosts = () => {
  return useQuery("posts", getPosts);
};

export default usePosts;
