import React, { useEffect, useState } from 'react';
import "./card.css";

function Card({ category, searchTerm, currentPage, onPageChange }) {
  const [myNews, setMyNews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 10;

  const fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${currentPage}`;

    if (category) {
      url += `&category=${category}`;
    }
    if (searchTerm) {
      url += `&q=${searchTerm}`;
    }
    url += "&apiKey=5fba8f71b0d84b829b9d29c5015e20d2";

    try {
      let rawData = await fetch(url);
      if (!rawData.ok) {
        throw new Error('Network response was not ok');
      }
      let getData = await rawData.json();
      setMyNews(getData.articles);
      setTotalResults(getData.totalResults);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, searchTerm, currentPage]);

  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <div className='mainDiv'>
      {myNews.map((ele, index) => (
        <div key={index} className="card" style={{ width: "350px", height: "400px", marginLeft: "7.2rem", marginTop: "2rem" }}>
          <img
            src={ele.urlToImage || "https://dims.apnews.com/dims4/default/e0d2b4b/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F01%2F89%2F2cd2026c9fa8b2e11e5401b4a8c6%2F6b48d3b3044e4a84a6a7ce91ea5a5552"}
            className="card-img-top"
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title">{ele.author}</h5>
            <p className="card-text">{ele.title}</p>
            <a href={ele.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
          </div>
        </div>
      ))}
      <div className="pagination">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Card;
