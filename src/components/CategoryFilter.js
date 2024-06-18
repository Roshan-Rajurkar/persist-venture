import React from 'react';

const categories = ['general', 'business', 'technology', 'entertainment', 'health', 'science', 'sports'];

const CategoryFilter = ({ category, onChange }) => {
  return (
    <div className="mb-4">
      <select value={category} onChange={(e) => onChange(e.target.value)} className="p-2 bg-white border rounded-md">
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
