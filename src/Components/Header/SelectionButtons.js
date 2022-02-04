import { Fragment } from "react";
import "./SelectionButtons.css";

const SelectionButtons = (props) => {
  const handleClick = () => {
    props.selected(props.children);
  };

  return (
    <Fragment>
      <button className={props.styl} onClick={handleClick}>{props.children}</button>
    </Fragment>
  );
};

export default SelectionButtons;
