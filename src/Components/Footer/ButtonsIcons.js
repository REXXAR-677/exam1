import React, { Fragment, useContext } from "react";
import filterContext from "../../Store/filter-context";

const ButtonsIcons = () => {
  const ctx = useContext(filterContext);
  const next = ">";
  const previous = "<";
  const paginate = (i) => { ctx.setCurrentPage(i)}
  
  return (
    <Fragment>
      <nav>
        <ul>
          <button onClick={ctx.previousPage}>{previous}</button>
          {ctx.pagesNumbers.map((i) => (
            <button key={i} onClick={() => {paginate(i)}}>{i}</button>
          ))}
          <button onClick={ctx.nextPage}>{next}</button>
        </ul>
      </nav>
    </Fragment>
  );
};

export default ButtonsIcons;
