import React from "react";
import classes from "../styles/search.module.css";

function Search({ searchTitle, setSearchTitle }) {
  const handleSearch = (e) => {
    setSearchTitle(e.target.value);
  };

  return (
    <div>
      {/* SEARCH */}
      <div className={classes.input}>
        <input type="text" placeholder="Search.." onChange={handleSearch} />
      </div>
    </div>
  );
}

export default Search;
