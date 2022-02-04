import { useState, useCallback, useEffect } from "react";

const useHttp = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        try {
          const fetchedData = await response.json();
          setData(fetchedData);
          setIsLoading(false);
        } catch (err) {
          setError(err)
        }
      }
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, error, data };
};

export default useHttp;
