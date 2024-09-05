import { useState } from "react";
import { IForm, IUser } from "../types/types";

const UseDelete = () => {
  const [data, setData] = useState<IUser[] | IForm[] | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to delete user");
      }
      const data = await res.json();
      console.log(data);
      setData(data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };
  return { handleDelete, data, error, loading };
};

export default UseDelete;
