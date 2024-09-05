import { useEffect, useState } from "react";
import { IUser } from "../types/types";

const useFetch = () => {
  const [data, setData] = useState<IUser[] | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
      if (!response?.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { data, error, loading };
};

export default useFetch;
