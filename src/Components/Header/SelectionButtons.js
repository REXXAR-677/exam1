import classes from "./SelectionButtons.module.css";

const SelectionButtons = ({ styles, selected, children }) => {
  const handleClick = () => {
    selected(children);
  };

  return (
    <button
      className={styles ? `${classes.btn} ${classes["btn-active"]}` : classes.btn}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default SelectionButtons;
