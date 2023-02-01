import React, { useState } from "react";
import "./CountLike.css";
const CountLike = ({ setRating }) => {
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);
  const handleUpvote = () => {
    setUpvote((prev) => prev + 1);
    setRating((prev) => prev + 1);
  };

  const handleDownvote = () => {
    setDownvote((prev) => (prev < 0 ? 0 : prev + 1));
    setRating((prev) => prev - 1);
    //setRating(newRating);
  };

  return (
    <div>
      <button className="buttons Up-vote" onClick={handleUpvote}>
        👍 {upvote}
      </button>
      <button className="buttons Down-vote" onClick={handleDownvote}>
        👎{downvote}
      </button>
    </div>
  );
};

export default CountLike;
