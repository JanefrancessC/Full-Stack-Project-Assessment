import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ videos, setVideos }) => {
  const [term, setTerm] = useState("");
  //This handles the search bar input and finding the results

  const onInputChange = (e) => {
    setTerm(e.target.value);
    let searchResult = videos.filter((video) =>
      video.title.toLowerCase().includes(term.toLowerCase())
    );
    setVideos(searchResult);
    if (!e.target.value) {
      fetch(`/videos`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => setVideos(data))
        .catch((err) => console.error(err));
    }
   
  };
  return (
    <div className="Search-video Forms-container">
      <form className="forms">
        <label htmlFor="term" className="labels">
          {" "}
          Search
        </label>
        <input
          type="text"
          value={term}
          placeholder="Enter search"
          onChange={onInputChange}
          className="input"
        />
      </form>
    </div>
  );
};

export default SearchBar;
