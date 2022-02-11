import CardItem from "./CardItem";
import { useCallback, useEffect, useState } from "react";
import classes from "./cards.module.css";

const CardAll = ({
  dataFetched,
  itemsInLocalStorage,
  addItem,
  removeItem,
  idArray,
}) => {
  const [showItems, setShowItems] = useState();

  const selectedHandler = useCallback(
    (selectedNews) => {
      if (itemsInLocalStorage[0].getItem(selectedNews.story_id) === null) {
        addItem(selectedNews.story_id, selectedNews);
      } else {
        removeItem(selectedNews.story_id);
      }
    },
    [itemsInLocalStorage, removeItem, addItem]
  );

  useEffect(() => {
    setShowItems(dataFetched);
  }, [dataFetched]);

  return (
    <ul className={classes.container_inner}>
      {showItems !== undefined &&
        showItems.map(
          (item) =>
            item.story_url && (
              <CardItem
                key={item.objectID}
                title={item.story_title}
                url={item.story_url || item.url}
                item={item}
                created={item.created_at}
                author={item.author}
                selected={selectedHandler}
                id={item.story_id}
                idArray={idArray}
              />
            )
        )}
    </ul>
  );
};

export default CardAll;
