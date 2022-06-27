import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import MainForm from "./features/posts/MainForm";
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainForm />} />
          <Route exact path="/posts/:postId" element={<SinglePostPage />} />
          <Route exact path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>
        {/* <Navigate to="/" /> */}
      </div>
    </Router>
  )
}

export default App;
