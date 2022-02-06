import React, { Fragment, useState, useContext } from "react";
import FilterCard from "./FilterCard";
import filterContext from "../../Store/filter-context";

const FilterDropdown = () => {
  const [open, setOpen] = useState(false);
  const ctxFilter = useContext(filterContext);
  const filter = ["Angular", "Reactjs", "Vuejs"];
  const handleFilter = (filter) => {
    ctxFilter.changeFilter(filter.toLowerCase());
  };
  return (
    <div>
      <Fragment>
        <div
          onClick={() => {
            setOpen(!open);
          }}
        >
          Select your news
        </div>
        {open && (
          <div>
            {filter.map((item, index) => (
              <FilterCard
                key={index}
                link={item.toLowerCase()}
                item={item}
                select={handleFilter}
              >
                {item}
              </FilterCard>
            ))}
          </div>
        )}
      </Fragment>
    </div>
  );
};

export default FilterDropdown;
