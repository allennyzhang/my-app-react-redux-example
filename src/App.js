import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import MainForm from "./features/posts/MainForm";

const ViewPostForm = lazy(() => import('./features/posts/ViewPostForm'))
const EditPostForm = lazy(() => import('./features/posts/EditPostForm'))

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<MainForm />} />
            <Route exact path="/posts/:postId" element={<ViewPostForm />} />
            <Route exact path="/editPost/:postId" element={<EditPostForm />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App;
