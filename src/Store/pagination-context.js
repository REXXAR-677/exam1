import React, { useState } from "react";

const paginationContext = React.createContext({
  currentPage: 1,
  setMaxPage: () => {},
  setCurrentPage: ()=>{},
  nextPage: () => {},
  previousPage: () => {},
});

export const PaginationContextProvider = (props) => {
  const [cPage, setCPage] = useState(1);
  const [maxPage, setMaxPage] = useState(50)

  const handleCurrentPage = (number) => {
    setCPage(number);
  };

  const handleNextPage = () => {
    let number = cPage;
    if (cPage >= maxPage) {
      setCPage(maxPage);
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

  const handleMaxPage = (number) => {
    setMaxPage(number)
  }

  const value = {
    currentPage: cPage,
    setMaxPage: handleMaxPage,
    setCurrentPage: handleCurrentPage,
    nextPage: handleNextPage,
    previousPage: handlePreviousPage,
  };

  return (
    <paginationContext.Provider value={value}>
      {props.children}
    </paginationContext.Provider>
  );
};
export default paginationContext;