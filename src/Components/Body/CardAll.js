import React from "react";
import CardItem from "./CardItem";
import useLocalStorage from "../../Hooks/useLocalStorage";

const CardAll = ({ dataFetched }) => {
  const [removeItem, addItem, itemsInLocalStorage] = useLocalStorage()
  const selectedHandler = (selectedNews) => {
    // addItem(x)
    // console.log(itemsInLocalStorage)
    console.log(selectedNews)
  }
  return (
    <ul>
      {dataFetched.map(
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
            />
          )
      )}
    </ul>
  );
};

export default CardAll;
