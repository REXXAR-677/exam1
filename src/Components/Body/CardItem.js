import { ReactComponent as BorderHeart } from "../../Assets/heartOutline.svg";

const CardItem = (props) => {
  const handler = () => {
    props.selected(props.item);
  };
  return (
    <li>
      <a href={props.url}>{props.title}</a>
      <button onClick={() => handler()}>
        <BorderHeart />
      </button>
    </li>
  );
};

export default CardItem;
