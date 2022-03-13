import React, { useState } from "react";
import "./Rightscreen.css";
const Rightscreen = ({ tweets }) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState({});
  const [found, setFound] = useState(false);
  const filterData = (e) => {
    if (e.key === "Enter") {
      const filteredData = tweets.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(query.toLowerCase());
      });

      if (filteredData.length !== 0) {
        setResult(filteredData[0]);
        setFound(true);
      } else {
        setResult(" ");
        alert("No result Found");
      }
    }
  };

  return (
    <div className="right-screen">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Twitter"
        className="search-input"
        onKeyDown={filterData}
      />

      <div className="search_tweets">
        {found && (
          <div>
            <h3>{result.userName}</h3>
            <p>{result.tweet}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Rightscreen;
