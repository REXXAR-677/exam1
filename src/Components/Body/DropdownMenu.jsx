import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DropdownItems from "./DropdownItems";
import filterContext from "../../Store/filter-context";
import classes from "./DropdownMenu.module.css";
import arrowDown from "../../Assets/arrow-dropdown.svg";

const showMenu = {
  enter: {
    opacity: 1,
    y: 0,
    display: "block",
  },
  exit: {
    y: -6,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

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
        <img
          alt="img"
          className={classes.filterContainer_header_icon}
          src={arrowDown}
        />
      </div>
      <AnimatePresence>
        <motion.div
          variants={showMenu}
          initial="exit"
          animate={open ? "enter" : "exit"}
          className={classes.filterContainer_dropdown}
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
