import { useContext } from "react";
import filterContext from "../../Store/filter-context";
import SelectionButtons from "./SelectionButtons";
import classes from "./Header.module.css";

const Header = () => {
  const ctx = useContext(filterContext);
  const options = ["All", "My faves"];

  const handleSelection = (option) => {
    ctx.setUserFilter(option);
  };

  return (
    <div className={classes.headerContainer}>
      <section className={classes.headerContainer_title}>
        <h1 className={classes.headerContainer_title_text}>HACKER NEWS</h1>
      </section>
      <section className={classes.headerContainer_selection}>
        {options.map((button, index) => (
          <SelectionButtons
            key={index}
            styles={button === ctx.userFilter ? "blue" : ""}
            selected={handleSelection}
            children={button}
          />
        ))}
      </section>
    </div>
  );
};

export default Header;
