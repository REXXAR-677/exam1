import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FilterContextProvider } from "./Store/filter-context";

ReactDOM.render(
  <FilterContextProvider>
    <App />
  </FilterContextProvider>,
  document.getElementById("root")
);
