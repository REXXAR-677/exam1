import CardItem from "./CardItem";
import noFoundFaves from "../../Assets/no-faves-found.json";
import Lottie from "react-lottie";
import classes from "./cards.module.css";

const defaultOptionsNoFaves = {
  loop: true,
  autoplat: true,
  animationData: noFoundFaves,
  redererSettings: {
    preserverAspectRatio: "xMidYMid slice",
  },
};

const CardFaves = ({ idArray, favoriteItems, removeItem,selectedFilter }) => {
  const selectedHandler = (news) => {
    const key = `${selectedFilter}${news.story_id}${news.author}${news.created_at}`
    removeItem(key)
  };

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      {favoriteItems.length < 1 && (
        <Lottie options={defaultOptionsNoFaves} height={250} width={250}/>
      )}
      {favoriteItems.length > 0 && (
        <ul className={classes.container_inner}>
          {favoriteItems.map((news) => (
            <CardItem
              key={news.objectID}
              title={news.story_title}
              url={news.story_url || news.url}
              item={news}
              created={news.created_at}
              author={news.author}
              selected={selectedHandler}
              id={`${selectedFilter}${news.story_id}${news.author}${news.created_at}`}
              idArray={idArray}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CardFaves;
