const filterCard = (props) => {
  const handleSelect = () => {
    props.select(props.item)
  }
  return (
    <p onClick={handleSelect}>{props.children}</p>
  );
};

export default filterCard;
