import React from "react";
import Posts from "./components/posts/Posts";
import { Routes, Route } from "react-router-dom";
import PostDetailPage from "./pages/PostDetailPage";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
