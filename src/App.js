import { Fragment } from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

const App = () => {
  return (
      <Fragment>
        <Header/>
        <Body />
        <Footer />
      </Fragment>
  );
}

export default App;
