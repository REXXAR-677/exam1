import { Fragment, useContext, useState } from "react";
import filterContext from "../../Store/filter-context";
import SelectionButtons from "./SelectionButtons";


const Header = () => {
  const ctx = useContext(filterContext);
  const options = ["All", "My faves"];

  const handleSelection = (name) => {
    ctx.setUserFilter(name)
  };
  return (
    <Fragment>
      <section>
        <h1>HACKER NEWS</h1>
      </section>
      <section>
        {options.map((button, index) => (
          <SelectionButtons
            key={index}
            styl={button === ctx.userFilter ? "blue" : ""}
            selected={(x) => handleSelection(x)}
            children={button}
          />
        ))}
      </section>
    </Fragment>
  );
};

export default Header;
