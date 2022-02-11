import { useState } from "react";

const useLocalStorage = (key = "key", value = "value") => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const valueInLocalStorage = localStorage.getItem(key);
      return valueInLocalStorage ? JSON.parse(valueInLocalStorage) : value;
    } catch (e) {
      console.log(e);
      return value;
    }
  });

  let idArray = [];
  const [itemsInLocalStorage] = useState([localStorage]);
  const arrayOfItemsInLocalStorage = Object.entries(itemsInLocalStorage[0]);
  arrayOfItemsInLocalStorage.map((i) => idArray.push(i[0]));

  const removeItem = (key) => {
    localStorage.removeItem(key);
    setStoredValue(key);
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

  return [itemsInLocalStorage, idArray, removeItem, addItem];
};

export default useLocalStorage;
