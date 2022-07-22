import { Route, Routes } from "react-router-dom";
import { Posts } from "./components/Posts/Posts";

import { EditPost } from "./components/Posts/Post/EditPost";
import { PageNotFound } from "./components/PageNotFound";
import { Navbar } from "./components/Header/Navbar";
import { SinglePostDetails } from './components/Posts/Post/SinglePostDetails';
import { AddPost } from './components/Posts/Post/AddPost';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/add" element={<AddPost />} />
        <Route path="/posts/edit/:id" element={<EditPost />} />
        <Route path="/posts/:id" element={<SinglePostDetails />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
