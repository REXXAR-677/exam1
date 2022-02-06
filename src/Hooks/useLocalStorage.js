import { useState } from "react";

const useLocalStorage = (id, value) => {
  const [value, setValue] = useState({});
  const [id, setId] = useState(null)
  const check = window.localStorage.getItem(id) !== null;
  if (check === null) {
    const item = window.localStorage.setItem(id, JSON.stringify(value)); // saved as an js object, id is key, value is value os that key
    return item;
  }
  window.localStorage.removeItem(id)
};

export default useLocalStorage;