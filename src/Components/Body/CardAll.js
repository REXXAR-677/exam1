import CardItem from "./CardItem";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { useCallback, useEffect, useState } from "react";

const CardAll = ({ dataFetched, itemsInLocalStorage, addItem, removeItem, idArray }) => {
  const [show, setShow] = useState();

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
    setShow(dataFetched);
  }, [dataFetched]);

  return (
    <ul>
      {show !== undefined &&
        show.map(
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
