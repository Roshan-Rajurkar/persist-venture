import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ArticleDetail from './components/ArticleDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
    </Routes>
  );
}

export default App;
