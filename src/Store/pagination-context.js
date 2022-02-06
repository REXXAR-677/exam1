import React, { useState } from "react";

const paginationContext = React.createContext({
  currentPage: 1,
  setCurrentPage: (number)=>{},
  nextPage: () => {},
  previousPage: () => {},
});

export const PaginationContextProvider = (props) => {
  const [cPage, setCPage] = useState(1);

  const handleCurrentPage = (number) => {
    setCPage(number);
  };

  const handleNextPage = () => {
    let number = cPage;
    if (cPage >= 50) {
      setCPage(50);
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

  const value = {
    currentPage: cPage,
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