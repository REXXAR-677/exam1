import React, { useContext } from "react";
import useHttp from "../../Hooks/useHttp";
import filterContext from "../../Store/filter-context";
import FilterDropdown from "./FilterDropdown";
import CardAll from "./CardAll";
import CardFaves from "./CardFaves";
import paginationContext from "../../Store/pagination-context";

const Body = () => {
  const ctxFilter = useContext(filterContext);
  const ctxPagination = useContext(paginationContext);
  const url = `https://hn.algolia.com/api/v1/search_by_date?query=${ctxFilter.filterNews}&page=${ctxPagination.currentPage}`
  const { isLoading, error, data: dataFetched } = useHttp(url);

  return (
    <div>
      {isLoading && <h1>loading...</h1>} {/* add animation */}
      {error && !isLoading && <h3>Something went wrong while fetching!</h3>}
      {!error && !isLoading && ctxFilter.userFilter === "All" && (
        <section>
          <FilterDropdown />
          <CardAll dataFetched={dataFetched} />
        </section>
      )}
      {!error && !isLoading && ctxFilter.userFilter !== "All" && <CardFaves />}
    </div>
  );
};

export default Body;

/*
TERCERO:
- AÑADE FUNCIONALIDAD DE FAVORITOS Y PAGINA DE FAVORITOS CON SUS DEBIDOS COMPONENTES INDIVIDUALES

CUARTO:
- AÑADE LOS ESTILOS Y TRASICIONES, CON VARIABLES DE CSS
*/
