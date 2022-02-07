import { useState, useEffect } from "react";

const useHttp = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [maxPage, setMaxPage] = useState(null)

  useEffect(() => {
    const abortionController = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {signal: abortionController.signal});
        if (response.ok) {
          try {
            const fetchedData = await response.json();
            setMaxPage(fetchedData.nbPages)
            setData(fetchedData.hits);
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
    };
    fetchData()
    return () => {
      abortionController.abort()
    }
  }, [url]);

  return { isLoading, error, data , maxPage};
};

export default useHttp;
