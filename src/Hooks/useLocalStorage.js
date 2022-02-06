import { useState } from "react";

const useLocalStorage = (i, value) => {
  const [stored, setStored] = useState(value);
  const [id, setId] = useState(i);
  setStored(value);
  setId(i);
  const check = window.localStorage.getItem(id) !== null;
  if (check === null) {
    window.localStorage.setItem(id, JSON.stringify(stored)); // saved as an js object, id is key, value is value os that key
    const items = window.localStorage;
    console.log(items)
    return [setId, setStored, items];
  }
  window.localStorage.removeItem(id);
  return [setId, setStored, items];
};

export default useLocalStorage;
