import React, { useContext } from "react";
import classes from "./Pagination.module.css";
import paginationContext from "../../Store/pagination-context";

const NumberButtons = (props) => {
  const ctxPagination = useContext(paginationContext);
  const paginate = (i) => {
    ctxPagination.setCurrentPage(i);
  };

  return (
    <nav className={classes.paginationNumber_container}>
      <button
        className={classes.paginationNumber_btn}
        onClick={ctxPagination.previousPage}
      >
        {"<"}
      </button>
      {props.pagination.map((i) => (
        <button
          className={
            i === ctxPagination.currentPage
              ? classes["paginationNumber_btn-active"]
              : classes.paginationNumber_btn
          }
          key={i}
          onClick={() => {
            paginate(i);
          }}
        >
          {i}
        </button>
      ))}
      <button
        className={classes.paginationNumber_btn}
        onClick={() => ctxPagination.nextPage(props.number)}
      >
        {">"}
      </button>
    </nav>
  );
};

export default NumberButtons;
