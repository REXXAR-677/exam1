import { useEffect, useState } from "react";
import { ReactComponent as BorderHeart } from "../../Assets/heartOutline.svg";
import { ReactComponent as FilledHeart } from "../../Assets/heartFilled.svg";
import "./CardItem.css";

const CardItem = (props) => {
  const [style, setStyle] = useState(false);

  useEffect(() => {
    const check = props.idArray.indexOf(props.id.toString()) !== -1;
    setStyle(check);
  }, []);
  
  const handler = () => {
    setStyle(!style);
    props.selected(props.item);
  };

  return (
    <li>
      <a href={props.url} className={style ? "red" : ""}>
        {props.title}
      </a>
      <button onClick={() => handler()}>
        {!style && <BorderHeart />}
        {style && <FilledHeart />}
      </button>
    </li>
  );
};

export default CardItem;
