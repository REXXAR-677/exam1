import { useState } from "react";

const useLocalStorage = (key = "", value = "") => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const valueInLocalStorage = localStorage.getItem(key);
      return valueInLocalStorage ? JSON.parse(valueInLocalStorage) : value;
    } catch (e) {
      console.log(e);
      return value;
    }
  });
  const [itemsInLocalStorage] = useState([localStorage]);
  const removeItem = (key) => {
    localStorage.removeItem(key);
  };
  const addItem = (key, value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong while adding to faves :(");
    }
  };

  return [itemsInLocalStorage, removeItem, addItem];
};

export default useLocalStorage;
