import React from "react";
import CardItem from "./CardItem";

const CardAll = ({ dataFetched }) => {
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
            />
          )
      )}
    </ul>
  );
};

export default CardAll;
