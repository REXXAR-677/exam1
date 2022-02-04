import { Fragment, useState } from "react";
import SelectionButtons from "./SelectionButtons";

const options = ["All", "My faves"];

const Header = () => {
  const [buttons, setButtons] = useState(options[0]);

  let selection = "All";

  const handleSelection = (name) => {
    selection = name;
    setButtons(name);
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
            styl={button === buttons ? "blue" : ""}
            selected={(x) => handleSelection(x)}
            children={button}
          />
        ))}
      </section>
    </Fragment>
  );
};

export default Header;
