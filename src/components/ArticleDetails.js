import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = useSelector((state) => state.articles[id]);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <img src={article.urlToImage} alt={article.title} className="w-full h-96 object-cover rounded-md" />
      <h1 className="text-3xl font-bold mt-4">{article.title}</h1>
      <p className="text-gray-700 mt-4">{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 block">Read full article</a>
    </div>
  );
};

export default ArticleDetail;
