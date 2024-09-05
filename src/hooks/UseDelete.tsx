import { useContext, useState } from "react";
import { UserContext } from "../context/context";

const UseDelete = () => {
  const { deleteUser } = useContext(UserContext);
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
      deleteUser(id);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };
  return { handleDelete, error, loading };
};

export default UseDelete;
