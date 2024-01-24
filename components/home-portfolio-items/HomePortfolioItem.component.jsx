"use client";

import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './HomePortfolio.styles.css';

const HomePortfolioItem = () => {
  const [error, setError] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const getPortfolioItems = async () => {
      await axios
        .get(
          'https://rockdigital.agency/dashboard/api/portfolio-items?populate=*'
        )
        .then((data) => setPortfolioItems(data.data.data))
        .catch((error) => setError(error));
    };
    getPortfolioItems();
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
      {portfolioItems &&
        portfolioItems.map((portfolioItem, i) => {
          if (i >= portfolioItems.length - 4)
          return (
          
              <div className='portfolio-item' key={i} >
                <a
                  href={portfolioItem.attributes.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={`https://rockdigital.agency/dashboard${portfolioItem.attributes.image.data.attributes.url}`}
                    alt=''
                    className='img-fluid'
                  />
                </a>
                <h4>{portfolioItem.attributes.name}</h4>
              </div>
          );
          return null;
        })}
    </>
  );
};

export default HomePortfolioItem;
