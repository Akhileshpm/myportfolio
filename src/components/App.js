import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import React, { Fragment } from "react";

import '../styles/App.css';
import { Home } from './portfolio/Home';
import { Blog } from './blog/Blog';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
