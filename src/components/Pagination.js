import React from 'react';

const Pagination = ({ page, onPageChange }) => {
  return (
    <div className="flex justify-center mt-8">
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1} className="px-4 py-2 mx-2 bg-gray-300 rounded-md">Previous</button>
      <span className="px-4 py-2 mx-2">{page}</span>
      <button onClick={() => onPageChange(page + 1)} className="px-4 py-2 mx-2 bg-gray-300 rounded-md">Next</button>
    </div>
  );
};

export default Pagination;
