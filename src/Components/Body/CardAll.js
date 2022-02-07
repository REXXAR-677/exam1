import CardItem from "./CardItem";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { useEffect, useState } from "react";

const CardAll = ({ dataFetched }) => {
  const [show, setShow] = useState();
  const [itemsInLocalStorage, removeItem, addItem, idArray] = useLocalStorage();

  const selectedHandler = (selectedNews) => {
    if (itemsInLocalStorage[0].getItem(selectedNews.story_id) === null) {
      addItem(selectedNews.story_id, selectedNews);
    } else {
      removeItem(selectedNews.story_id);
    }
  };
  useEffect(() => {
    setShow(
      dataFetched.map(
        (i) =>
          i.story_url && (
            <CardItem
              key={i.objectID}
              title={i.story_title}
              url={i.story_url || i.url}
              item={i}
              created={i.created_at}
              author={i.author}
              selected={selectedHandler}
              id={i.story_id}
              idArray={idArray}
            />
          )
      )
    );
  }, [dataFetched, localStorage]);

  return <ul>{show}</ul>;
};

export default CardAll;
