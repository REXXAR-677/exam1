import { useEffect, useState } from "react";
import formatDistance from "date-fns/formatDistance";
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
  const time = formatDistance(new Date(Date.parse(created)), new Date(), {
    addSuffix: true,
  });

  useEffect(() => {
    const checkFavorites = idArray.indexOf(id) !== -1;
    setIsFavorite(checkFavorites);
  }, [idArray, id]);

  const handleSetFavorite = () => {
    setIsFavorite(!isFavorite);
    selected(item);
  };

  const handleGoToNews = () => {
    window.open(url, "_blank");
  };

  return (
    <li
      className={`${classes.cardContainer} animate__animated animate__fadeIn`}
    >
      <div onClick={handleGoToNews} className={classes.cardContainer_link}>
        <div className={classes.cardContainer_header}>
          <div className={classes.cardContainer_header}>
            <img
              alt={id}
              src={timeLogo}
              width={15}
              className={classes.cardContainer_header_img}
            />
            <p className={classes.cardContainer_header_title}>{`${time.replace(
              "about",
              ""
            )} by ${author}`}</p>
          </div>
        </div>
        <p className={classes.cardContainer_title}>{title}</p>
      </div>
      <button
        onClick={() => handleSetFavorite()}
        className={classes.cardContainer_btn}
      >
        {!isFavorite && <BorderHeart />}
        {isFavorite && <FilledHeart />}
      </button>
    </li>
  );
};

export default CardItem;
