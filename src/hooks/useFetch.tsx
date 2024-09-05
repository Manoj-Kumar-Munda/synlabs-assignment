import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
    } catch (e: any) {
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { data, error, loading };
};

export default useFetch;

