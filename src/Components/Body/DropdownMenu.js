import { useState, useContext } from "react";
import DropdownItems from "./DropdownItems";
import filterContext from "../../Store/filter-context";
import classes from "./DropdownMenu.module.css";
import arrowDown from "../../Assets/arrow-dropdown.svg";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const ctxFilter = useContext(filterContext);
  const filter = ["Angular", "Reactjs", "Vuejs"];
  const handleFilter = (filter) => {
    ctxFilter.changeFilter(filter.toLowerCase());
  };
  return (
    <div className={classes.filterContainer}>
      <div
        className={classes.filterContainer_header}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p className={classes.filterContainer_header_title}>Select your news</p>
        <img alt="img" className={classes.filterContainer_header_icon} src={arrowDown} />
        {/* <img className={classes.filterContainer_header_icon} src={arrowDown} alt="arrowDown"/> */}
      </div>
      {open && (
        <div
          className={
            open
              ? classes.filterContainer_dropdown
              : classes.filterContainer_dropdown_exit
          }
        >
          {filter.map((item, index) => (
            <DropdownItems
              key={index}
              link={item.toLowerCase()}
              item={item}
              select={handleFilter}
            >
              {item}
            </DropdownItems>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
