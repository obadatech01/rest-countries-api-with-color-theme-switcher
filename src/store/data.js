import { useState, useCallback, useEffect } from 'react'

const FetchData = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return { loading, data };
}

export default FetchData;