import CardItem from "./CardItem";
import { useCallback, useEffect, useState, useContext } from "react";
import classes from "./cards.module.css";
import filterContext from "../../Store/filter-context";

const CardAll = ({
  dataFetched,
  itemsInLocalStorage,
  addItem,
  removeItem,
  idArray,
}) => {
  const [showItems, setShowItems] = useState();
  const ctxFilter = useContext(filterContext);

  const selectedHandler = useCallback(
    (selectedNews) => {
      let key = `${ctxFilter.filterNews}${selectedNews.story_id}${selectedNews.author}${selectedNews.created_at}`;
      if (itemsInLocalStorage[0].getItem(key) === null) {
        addItem(key, selectedNews);
      } else {
        removeItem(key);
      }
    },
    [itemsInLocalStorage, removeItem, addItem, ctxFilter.filterNews]
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
                id={`${ctxFilter.filterNews}${item.story_id}${item.author}${item.created_at}`}
                idArray={idArray}
                // isFav={localStorage}
              />
            )
        )}
    </ul>
  );
};

export default CardAll;
