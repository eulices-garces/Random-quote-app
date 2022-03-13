import React, { useState, useEffect } from 'react';

const App = () => {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App container">
      <div className="container quote">
        <figure>
        <blockquote class="blockquote">
          <p className="mb-0">"{quotes.text}"</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Author: {quotes.author}
        </figcaption>
        </figure>
        <div className="bttn">
        <button onClick={getQuote} className="btn btn-outline-success">Get quote</button>
        <a 
          href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
          className="btn btn-outline-primary"
          target="_blank"
          rel="noopener noreferrer">
          Tweet
        </a>
        </div>
      </div>
      
    </div>
  );
}

export default App;