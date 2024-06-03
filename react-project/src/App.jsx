import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Page404 from "./404";
import Layout from "./Layout";
import ListPosts from "./ListPosts";
import PostDetail from "./PostDetail";

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="posts" element={<ListPosts />} />
        <Route path="posts/:id" element={<PostDetail />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
