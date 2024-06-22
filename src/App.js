import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar onCategoryChange={handleCategoryClick} onSearch={handleSearch} />
      <Card category={category} searchTerm={searchTerm} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
}

export default App;
