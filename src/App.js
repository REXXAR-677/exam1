import { useContext } from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import filterContext from "./Store/filter-context";

const App = () => {
  const ctxFilter = useContext(filterContext);
  const userFilter = ctxFilter.userFilter === "All";
  return (
    <div>
      <Header />
      <Body />
      {userFilter && <Footer/>}
    </div>
  );
};

export default App;
