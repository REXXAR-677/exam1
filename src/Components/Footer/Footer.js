import { useState, useContext, useEffect } from "react";
import paginationContext from "../../Store/pagination-context";
import Pagination from "./Pagination";
import classes from "./Footer.module.css";

const Footer = () => {
  const [pagination, setPagination] = useState([]);
  const ctxPagination = useContext(paginationContext);
  console.log(ctxPagination.maxPage);
  useEffect(() => {
    let counter = 0;
    let arrayOfPageNumbers = [];
    const getPagination = () => {
      let pageNumbers = Math.floor((ctxPagination.currentPage - 1) / 9) * 9;
      let lastNumber = pageNumbers + 9;
      if (lastNumber <= ctxPagination.maxPage) {
        arrayOfPageNumbers = Array(9)
          .fill()
          .map((number, index) => pageNumbers + index + 1);
        return arrayOfPageNumbers;
      }
      for (let i = lastNumber; i >= ctxPagination.maxPage; i--) {
        counter++;
      }
      arrayOfPageNumbers = Array(counter)
        .fill()
        .map((number, index) => pageNumbers + index + 1);
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
