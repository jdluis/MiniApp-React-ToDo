import {useEffect, useState} from 'react';

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      setTimeout(() => {
        //simulate the loading of request data of backend
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch {
          setError(error);
        }
      }, 1000);
    });
  
    const saveItem = (newTodos) => {
      try {
        const stringifyItem = JSON.stringify(newTodos);
        localStorage.setItem(itemName, stringifyItem);
        setItem(newTodos);
      } catch {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

  export { useLocalStorage };