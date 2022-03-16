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
    <div id="quote-box" className="App quote">
        <figure>
          <blockquote id="text" class="blockquote">
            <p className="mb-0">"{quotes.text}"</p>
          </blockquote>
          <figcaption id="author" className="blockquote-footer">
            Author: {quotes.author}
          </figcaption>
        </figure>
        
        <a 
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
          className="btn btn-info"
          target="_blank"
          rel="noopener noreferrer">
          Tweet
        </a>  
        <button id="new-quote" onClick={getQuote} className="btn btn-primary">New Quote</button>
    </div>
  );
}

export default App;