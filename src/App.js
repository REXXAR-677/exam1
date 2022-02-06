import { Fragment, useState } from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

const App = () => {
  const [numNews, setNumNews] = useState();
  const [data, setData] = useState();

  const fetchedData = (item) => {
    setNumNews(item.length);
    setData(item);
  };

  return (
    <Fragment>
      <Header />
      <Body fetchedData={(item) => fetchedData(item)} />
      <Footer number={numNews} data={data} />
    </Fragment>
  );
};

export default App;
