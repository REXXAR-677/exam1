import CardItem from "./CardItem";
import useLocalStorage from "../../Hooks/useLocalStorage";

const CardAll = ({ dataFetched }) => {
  const [removeItem, addItem, itemsInLocalStorage] = useLocalStorage();
  const selectedHandler = (selectedNews) => {
    if (itemsInLocalStorage[0].getItem(selectedNews.story_id) === null) {
      addItem(selectedNews.story_id, selectedNews.story_title);
    } else {
      removeItem(selectedNews.story_id);
    }
  };
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
              faved={() => {console.log(itemsInLocalStorage[0].getItem(i.story_id) ? true : false)}}
            />
          )
      )}
    </ul>
  );
};

export default CardAll;
