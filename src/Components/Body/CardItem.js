import React, { Fragment } from "react";
import { ReactComponent as BorderHeart } from "../../Assets/heartOutline.svg";

const cardItem = (props) => {
  const handler = () => {
    console.log(props.item.story_id);
  };
  return (
    <Fragment>
      <li>
        <a href={props.url}>{props.title}</a>
        <button
          onClick={() => {
            handler();
          }}
        >
          <BorderHeart />
        </button>
      </li>
    </Fragment>
  );
};

export default cardItem;
