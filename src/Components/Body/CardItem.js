import { useEffect, useState } from "react";
import { ReactComponent as BorderHeart } from "../../Assets/heartOutline.svg";
import { ReactComponent as FilledHeart } from "../../Assets/heartFilled.svg";
import timeLogo from "../../Assets/time-logo.svg";
import classes from "./CardItem.module.css";

const CardItem = ({
  title,
  url,
  item,
  created,
  author,
  selected,
  id,
  idArray,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    const time = (new Date().getTime() - new Date(created).getTime()) / 1000;
    if (time / 3600 > 2) {
      setDate(`${Math.floor(time / 3600)} hours ago`);
    } else if (
      time / 3600 === 1 ||
      (time / 3600 >= 1.1 && time / 3600 <= 1.9)
    ) {
      setDate(`1 hour ago`);
    } else if (time / 60 > 2) {
      setDate(`${Math.floor(time / 60)} minutes ago`);
    } else if (time / 60 === 1 || (time / 60 >= 1.1 && time / 60 <= 1.9)) {
      setDate(`1 minute ago`);
    } else if (time / 60 < 1) {
      setDate(`${Math.floor(time)} seconds ago`);
    } else if (time === 1) {
      setDate(`1 second ago`);
    }
    const checkFavorites = idArray.indexOf(id.toString()) !== -1;
    setIsFavorite(checkFavorites);
  }, []);

  const handler = () => {
    setIsFavorite(!isFavorite);
    selected(item);
  };

  return (
    <li className={`${classes.cardContainer} animate__animated animate__fadeIn`}>
      <a href={url} className={classes.cardContainer_link}>
        <div className={classes.cardContainer_header}>
          <div className={classes.cardContainer_header}>
            <img
              src={timeLogo}
              width={15}
              className={classes.cardContainer_header_img}
            />
            <p
              className={classes.cardContainer_header_title}
            >{`${date} by ${author}`}</p>
          </div>
        </div>
        <p className={classes.cardContainer_title}>{title}</p>
      </a>
      <button onClick={() => handler()} className={classes.cardContainer_btn}>
        {!isFavorite && <BorderHeart />}
        {isFavorite && <FilledHeart />}
      </button>
    </li>
  );
};

export default CardItem;
