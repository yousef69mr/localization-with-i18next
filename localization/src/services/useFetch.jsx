import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  console.log(url);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [data, url]);

  return { data, isLoading, error };
};

export default useFetch;
