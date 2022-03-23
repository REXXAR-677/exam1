import { useState, useContext, useEffect } from "react";
import paginationContext from "../../Store/pagination-context";
import Pagination from "./Pagination";
import classes from "./Footer.module.css";

const Footer = () => {
  const [pagination, setPagination] = useState([]);
  const ctxPagination = useContext(paginationContext);

  useEffect(() => {
    let counter = 0;
    let arrayOfPageNumbers = [];
    const getPagination = () => {
      let eachPageNumber = Math.floor((ctxPagination.currentPage - 1) / 9) * 9;
      let lastNumberOfArray = eachPageNumber + 9;
      if (lastNumberOfArray <= ctxPagination.maxPage) {
        arrayOfPageNumbers = Array(9)
          .fill()
          .map((numberOfPage, indexOfPage) => eachPageNumber + indexOfPage + 1);
        return arrayOfPageNumbers;
      }
      for (let indexOfPage = lastNumberOfArray; indexOfPage >= ctxPagination.maxPage; indexOfPage--) {
        counter++;
      }
      arrayOfPageNumbers = Array(counter)
        .fill()
        .map((numberOfPage, indexOfPage) => eachPageNumber + indexOfPage + 1);
      return arrayOfPageNumbers;
    };
    getPagination();
    setPagination(arrayOfPageNumbers);
  }, [ctxPagination.currentPage, ctxPagination.maxPage]);

  return (
    <div className={classes.paginationContainer}>
      <Pagination number={pagination.length} pagination={pagination} />
    </div>
  );
};

export default Footer;
