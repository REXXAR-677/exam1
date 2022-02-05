import React, { useState } from "react";

const filterContext = React.createContext({
  url: "",
  filterNews: "",
  myFavesNews: [],
  indexOfFirstPost: 0,
  indexOfLastPost: 0,
  changeFilter: (filter) => {},
  setCurrentPage: (number) => {},
  setMyFaves: (item) => {},
  removeMyFaves: (item) => {},
  nextPage: () => {},
  previousPage: () => {},
});

export const FilterContextProvider = (props) => {
  const [cPage, setCPage] = useState(1);
  const [pPerPage] = useState(8);
  const [faves, setFaves] = useState([]);
  const [filter, setFilter] = useState("reactjs");
  let url = `https://hn.algolia.com/api/v1/search_by_date?query=${filter}&page=0`;

  const indexOfLastPost = cPage * pPerPage;
  const indexOfFirstPost = indexOfLastPost - pPerPage;

  const handleCurrentPage = (number) => {
    setCPage(number);
  };

  const handleNextPage = (x) => {
    let number = cPage;
    if (cPage >= x) {
      setCPage(x);
    } else {
      number++;
      setCPage(number);
    }
  };

  const handlePreviousPage = () => {
    let number = cPage;
    if (cPage <= 1) {
      setCPage(1);
    } else {
      number--;
      setCPage(number);
    }
  };

  const handleChangeFilter = (filter) => {
    setFilter(filter);
  };

  const handleSetMyFaves = (item) => {};

  const handleRemoveMyFaves = (item) => {};

  const value = {
    url: url,
    filterNews: filter,
    myFavesNews: faves,
    postsPerPage: pPerPage,
    indexOfFirstPost: indexOfFirstPost,
    indexOfLastPost: indexOfLastPost,
    changeFilter: handleChangeFilter,
    setCurrentPage: handleCurrentPage,
    setMyFaves: handleSetMyFaves,
    removeMyFaves: handleRemoveMyFaves,
    nextPage: handleNextPage,
    previousPage: handlePreviousPage,
  };

  return (
    <filterContext.Provider value={value}>
      {props.children}
    </filterContext.Provider>
  );
};
export default filterContext;
