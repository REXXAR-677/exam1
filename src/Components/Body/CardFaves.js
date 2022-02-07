import CardItem from "./CardItem";

const CardFaves = ({ idArray, favoriteItems, removeItem }) => {
  console.log(favoriteItems)

  const selectedHandler = (news) => {
    removeItem(news.story_id)
  }

  return (
    <ul>
      {favoriteItems.map((news) => (
        <CardItem
          key={news.objectID}
          title={news.story_title}
          url={news.story_url || news.url}
          item={news}
          created={news.created_at}
          author={news.author}
          selected={selectedHandler}
          id={news.story_id}
          idArray={idArray}
        />
      ))}
    </ul>
  );
};

export default CardFaves;
