import { useEffect, useState } from "react";
import { IUser } from "../types/types";

const useFetch = () => {
  const [data, setData] = useState<IUser[] | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data:IUser[] = await response.json();
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

