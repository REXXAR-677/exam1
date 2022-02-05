import { Fragment, useState } from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

const App = () => {
  const [numNews , setNumNews] = useState();
  const numberOfNews = (x) => {
    setNumNews(x)
  }
  return (
      <Fragment>
        <Header/>
        <Body setNum={x=>numberOfNews(x)}/>
        <Footer number={numNews}/>
      </Fragment>
  );
}

export default App;
