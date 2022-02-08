import React, { useContext, useEffect } from "react";
import useHttp from "../../Hooks/useHttp";
import filterContext from "../../Store/filter-context";
import FilterDropdown from "./FilterDropdown";
import CardAll from "./CardAll";
import CardFaves from "./CardFaves";
import paginationContext from "../../Store/pagination-context";
import useLocalStorage from "../../Hooks/useLocalStorage";

const Body = () => {
  const [itemsInLocalStorage, idArray, removeItem, addItem] = useLocalStorage();
  const ctxPagination = useContext(paginationContext);
  const ctxFilter = useContext(filterContext);
  const url = `https://hn.algolia.com/api/v1/search_by_date?query=${ctxFilter.filterNews}&page=${ctxPagination.currentPage -1}`;
  const { isLoading, error, data: dataFetched, maxPage } = useHttp(url);
  
  const favoriteItems = Object.entries(itemsInLocalStorage[0]).map((i) => {
    return JSON.parse(i[1]);
  });

  useEffect(() => {
    ctxPagination.setMaxPage(maxPage);
  });

  return (
    <div>
      {isLoading && <h1>loading...</h1>} {/* add animation */}
      {error && !isLoading && <h3>Something went wrong while fetching!</h3>}
      {!error && !isLoading && ctxFilter.userFilter === "All" && (
        <section>
          <FilterDropdown />
          <CardAll
            dataFetched={dataFetched}
            idArray={idArray}
            addItem={addItem}
            removeItem={removeItem}
            itemsInLocalStorage={itemsInLocalStorage}
          />
        </section>
      )}
      {!error && !isLoading && ctxFilter.userFilter !== "All" && (
        <CardFaves
          idArray={idArray}
          favoriteItems={favoriteItems}
          removeItem={removeItem}
          addItem={addItem}
        />
      )}
    </div>
  );
};

export default Body;
