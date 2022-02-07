import React from "react";
import CardItem from "./CardItem";
import useLocalStorage from "../../Hooks/useLocalStorage";

const CardFaves = () => {
  const [itemsInLocalStorage, removeItem, addItem, idArray] = useLocalStorage();
  let items = [];
  const arr = Object.entries(itemsInLocalStorage[0]);
  arr.map((i) => items.push(JSON.parse(i[1])));
  console.log(items);
  const selectedHandler = () => {}
  return (
    <div>
      {items.map(
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
      )}
    </div>
  );
};

export default CardFaves;
