import React, { useEffect, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const filterContext = React.createContext({
  filterNews: "",
  userFilter: "",
  setUserFilter: (filter) => {},
  changeFilter: (filter) => {},
});

export const FilterContextProvider = (props) => {
  const [userFilter, setUserFilter] = useState("All");
  const [filter, setFilter] = useState("angular");
  const handleChangeFilter = (filter) => {
    setFilter(filter);
  };

  const handleSetUSerFilter = (filter) => {
    setUserFilter(filter);
  };

  const value = {
    filterNews: filter,
    userFilter: userFilter,
    setUserFilter: handleSetUSerFilter,
    changeFilter: handleChangeFilter,
  };

  return (
    <filterContext.Provider value={value}>
      {props.children}
    </filterContext.Provider>
  );
};
export default filterContext;
