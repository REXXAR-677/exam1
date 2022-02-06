import { useState } from "react";

const useLocalStorage = (key = "", value = "") => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const valueInLocalStorage = localStorage.getItem(key);
      return valueInLocalStorage ? JSON.parse(valueInLocalStorage) : value;
      /* if the value is already in the local storage, the initial 
      value will be the value stored in the local storage if not,
      it will be setted to the entered value */
    } catch (e) {
      console.log(e);
      return value;
    }
  });
  const [itemsInLocalStorage] = useState([localStorage])
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
    }
  };
  
  return [removeItem, addItem, itemsInLocalStorage];
};

export default useLocalStorage;

