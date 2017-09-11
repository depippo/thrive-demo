import React from 'react';

const QuoteCard = ({ quote, removeQuote, upvoteQuote, downvoteQuote }) => 
    <div className="quote">
      <p>{quote.content}</p>
      <p className="author">- {quote.author}</p>
      <div className="hline"></div> <br/>
    </div>;

export default QuoteCard;