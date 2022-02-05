import React, { Fragment, useContext } from "react";
import filterContext from "../../Store/filter-context";

const ButtonsIcons = (props) => {
  const ctx = useContext(filterContext);
  const paginate = (i) => { ctx.setCurrentPage(i)}
  const handleNext = () => {
    ctx.nextPage(props.number)
  }
  
  return (
    <Fragment>
      <nav>
        <ul>
          <button onClick={ctx.previousPage}>{"<"}</button>
          {props.pagination.map((i) => (
            <button key={i} onClick={() => {paginate(i)}}>{i}</button>
          ))}
          <button onClick={handleNext}>{">"}</button>
        </ul>
      </nav>
    </Fragment>
  );
};

export default ButtonsIcons;
