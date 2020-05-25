import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    // Object.keys(sortByOptions) returns an array containing key properties
    // map(SortByOption returns a callback function that refers to each element in the array
    return Object.keys(sortByOptions).map((SortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
}
