import React, { useContext, useEffect } from "react";
import useHttp from "../../Hooks/useHttp";
import filterContext from "../../Store/filter-context";
import DropdownMenu from "./DropdownMenu";
import CardAll from "./CardAll";
import CardFaves from "./CardFaves";
import paginationContext from "../../Store/pagination-context";
import useLocalStorage from "../../Hooks/useLocalStorage";
import Lottie from "react-lottie";
import loadingAnimation from "../../Assets/loading.json";
import notFoundAnimation from "../../Assets/not-found.json";
import classes from "./cards.module.css";

const defaultOptionsLoading = {
  loop: true,
  autoplat: true,
  animationData: loadingAnimation,
  redererSettings: {
    preserverAspectRatio: "xMidYMid slice",
  },
};
const defaultOptionsNotFound = {
  loop: true,
  autoplat: true,
  animationData: notFoundAnimation,
  redererSettings: {
    preserverAspectRatio: "xMidYMid slice",
  },
};

const Body = () => {
  const [itemsInLocalStorage, idArray, removeItem, addItem] = useLocalStorage();
  const ctxPagination = useContext(paginationContext);
  const ctxFilter = useContext(filterContext);
  const url = `https://hn.algolia.com/api/v1/search_by_date?query=${
    ctxFilter.filterNews
  }&page=${ctxPagination.currentPage - 1}`;
  const { isLoading, error, data: dataFetched, maxPage } = useHttp(url);

  const favoriteItems = Object.entries(itemsInLocalStorage[0]).map((i) => {
    return JSON.parse(i[1]);
  });

  useEffect(() => {
    ctxPagination.setMaxPage(maxPage);
  });

  return (
    <div className={classes.container}>
      {isLoading && (
        <Lottie options={defaultOptionsLoading} height={400} width={400} />
      )}
      {error && !isLoading && (
        <Lottie options={defaultOptionsNotFound} height={400} width={400} />
      )}
      {!error && !isLoading && ctxFilter.userFilter === "All" && (
        <section>
          <DropdownMenu />
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
