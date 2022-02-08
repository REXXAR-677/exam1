import React, { Fragment, useContext } from "react";
import paginationContext from "../../Store/pagination-context";

const NumberButtons = (props) => {
  const ctxPagination = useContext(paginationContext);
  const paginate = (i) => { ctxPagination.setCurrentPage(i)}
  const handleNext = () => {
    ctxPagination.nextPage(props.number)
  }
  
  return (
    <Fragment>
      <nav>
        <ul>
          <button onClick={ctxPagination.previousPage}>{"<"}</button>
          {props.pagination.map((i) => (
            <button key={i} onClick={() => {paginate(i)}}>{i}</button>
          ))}
          <button onClick={handleNext}>{">"}</button>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NumberButtons;
