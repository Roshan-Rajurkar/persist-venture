import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl font-bold mt-2">{article.title}</h2>
          <p className="text-gray-700 mt-2">{article.description}</p>
          <Link to={`/article/${index}`} className="text-blue-500 mt-4 block">Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
