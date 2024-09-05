import { useState } from "react";
import { IForm, IUser } from "../types/types";

const usePost = () => {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (
    e: React.FormEvent<HTMLFormElement>,
    formData: IForm
  ) => {
    e.preventDefault();
    console.log(formData);

    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error: any) {
      setError(error?.message);
      setLoading(false);
    }
  };

  return { postData, loading, error, userData };
};

export default usePost;
