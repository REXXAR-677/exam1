import React, { useState } from "react";

const filterContext = React.createContext({
  url: "",
  filterNews: "",
  myFavesNews: [],
  pagesNumbers: [],
  totalPosts: 10,
  postsPerPage: 8,
  currentPage: 1,
  indexOfFirstPost: 0,
  indexOfLastPost: 0,
  setCurrentPage: (number) => {},
  calculatePagination: () => {},
  setMyFaves: (item) => {},
  removeMyFaves: (item) => {},
  nextPage: () => {},
  previousPage: () => {},
});

export const FilterContextProvider = (props) => {
  const [cPage, setCPage] = useState(1);
  const [pPerPage, setPPerPage] = useState(8);
  let faves;
  let filter = "reactjs"
  let url = `https://hn.algolia.com/api/v1/search_by_date?query=${filter}&page=0`;
  let ttlPosts = 5;
  const pageNumbers = [];

  const indexOfLastPost = cPage * pPerPage;
  const indexOfFirstPost = indexOfLastPost - pPerPage;

  const handleCalculatePagination = (totalPosts, postsPerPage) => {
    for (let i = 1; i < Math.ceil(totalPosts / postsPerPage) + 1 ; i++) {
      pageNumbers.push(i);
    }
  };

  const handleNextPage = () => {
    let number = cPage
    // add logic for handling more than max page
    number++
    setCPage(number)
  };

  const handlePreviousPage = () => {
    let number = cPage
    //add logic for handling less than page 1
    number--
    setCPage(number)
  };

  const handleSetMyFaves = () => {};

  const handleRemoveMyFaves = () => {};

  const handleCurrentPage = (number) => {
    setCPage(number);
  };

  return (
    <filterContext.Provider
      value={{
        url: url,
        filterNews: filter,
        myFavesNews: faves,
        pagesNumbers: pageNumbers,
        totalPosts: ttlPosts,
        postsPerPage: pPerPage,
        currentPage: cPage,
        indexOfFirstPost: indexOfFirstPost,
        indexOfLastPost: indexOfLastPost,
        setCurrentPage: handleCurrentPage,
        calculatePagination: handleCalculatePagination,
        setMyFaves: handleSetMyFaves,
        removeMyFaves: handleRemoveMyFaves,
        nextPage: handleNextPage,
        previousPage: handlePreviousPage,
      }}
    >
      {props.children}
    </filterContext.Provider>
  );
};
export default filterContext;
