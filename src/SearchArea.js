import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import * as AppConstant from "./appConstant";
const SearchArea = () => {
  const [keyword, setKeyword] = useState("budgies");
  const [videos, setVideos] = useState([]);
  function requestSearch() {
    axios.get(`${AppConstant.SEARCH_URL}&q=${keyword}`)
      .then((res) => {
        const { items } = res.data;
        //console.log(items);
        setVideos(items);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="search-area">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestSearch();
        }}
      >
        <label htmlFor="keyword">
          Search{" "}
          <input
            type="text"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />{" "}
        </label>{" "}
        <button> Submit </button>{" "}
      </form>{" "}
      <Results videos={videos} />{" "}
    </div>
  );
};
export default SearchArea;
