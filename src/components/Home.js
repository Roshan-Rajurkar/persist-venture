import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, setCategory, setPage } from '../actions/newsActions';
import ArticleList from './ArticleList';
import Pagination from './Pagination';
import CategoryFilter from './CategoryFilter';

const Home = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchNews({ category, page }));
  }, [dispatch, category, page]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryFilter category={category} onChange={(cat) => dispatch(setCategory(cat))} />
      <ArticleList articles={articles} />
      <Pagination page={page} onPageChange={(p) => dispatch(setPage(p))} />
    </div>
  );
};

export default Home;
