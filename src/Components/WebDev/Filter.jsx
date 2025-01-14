// Filter.js
import React, { useState } from 'react';

const categories = ['All', 'Design', 'Design and Development', 'Mobile App Design'];

const Filter = ({ onFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        onFilterChange(event.target.value);
    };

    return (
        <div>
            <select className="form-select border-info-subtle" value={selectedCategory} onChange={handleCategoryChange}>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;