import React, { useState } from 'react';
import "./navbar.css";

function Navbar({ onCategoryChange, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand textLight" href="#">newsApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={() => handleCategoryClick("Business")}>Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleCategoryClick("Sports")}>Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true" onClick={() => handleCategoryClick("Entertainment")}>Entertainment</a>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleSearchChange} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
