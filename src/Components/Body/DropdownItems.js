import Angular from "../../Assets/AngularImg/AngularIcon.svg";
import Reactjs from "../../Assets/ReactjsImg/ReactIcon.svg";
import Vuejs from "../../Assets/VuejsImg/VueIcon.svg";
import classes from "./DropdownItems.module.css";

const DropdownItems = ({ children, select, item }) => {
  const handleSelect = () => {
    select(item);
  };
  const icons =
    children === "Angular" ? Angular : children === "Reactjs" ? Reactjs : Vuejs;
  return (
    <div className={classes.dropdownContainer_items} onClick={handleSelect}>
      <img
        className={classes.dropdownContainer_items_icon}
        alt={`${children} filterItem`}
        src={icons}
      />
      <p className={classes.dropdownContainer_items_title}>{children}</p>
    </div>
  );
};

export default DropdownItems;
