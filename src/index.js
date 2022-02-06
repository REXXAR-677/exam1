import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FilterContextProvider } from "./Store/filter-context";
import { PaginationContextProvider } from "./Store/pagination-context";

ReactDOM.render(
  <PaginationContextProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </PaginationContextProvider>,
  document.getElementById("root")
);
