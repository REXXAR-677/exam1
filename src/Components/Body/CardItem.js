import React, { Fragment } from "react";
import { ReactComponent as BorderHeart } from '../../Assets/heartOutline.svg'

const cardItem = (props) => {
  return (
    <Fragment>
      <li>
        <a href={props.url}>{props.title}</a>
        <button onClick={()=>{console.log(props.item)}}><BorderHeart /></button>
      </li>
    </Fragment>
  );
};

export default cardItem;
